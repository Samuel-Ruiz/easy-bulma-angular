import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {BreadCrumb} from './breadcrumb';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {BreadcrumbModel} from '../../models/breadcrumb/breadcrumb.model';
import {ElementOrientationModel} from '../../models/commons/elementOrientation.model';
import {ElementSizeModel} from '../../models/commons/elementSize.model';
import {BreadcrumbSeparatorModel} from '../../models/breadcrumb/breadcrumbSeparator.model';

@Component({
  selector: 'eba-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadcrumbConfig: BreadcrumbModel = new BreadcrumbModel();
  elementOrientation: ElementOrientationModel = new ElementOrientationModel();
  elementSize: ElementSizeModel = new ElementSizeModel();
  breadcrumbSeparator: BreadcrumbSeparatorModel = new BreadcrumbSeparatorModel();
  inactiveBreadCrumbs: BreadCrumb[] = null;
  activeBreadcrumb: BreadCrumb = null;
  @ViewChild('breadcrumbNav') breadcrumbNav: ElementRef;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(() => this.buildBreadCrumb(this.activatedRoute.root)),
     ).subscribe( breadcrumbs => {
       this.inactiveBreadCrumbs =  breadcrumbs.slice(0, breadcrumbs.length - 1);
       this.activeBreadcrumb =  breadcrumbs[breadcrumbs.length - 1];
    });
  }

  setBreadcrumbConfig(breadcrumb: BreadcrumbModel) {
    this.breadcrumbConfig = breadcrumb;
    if (this.elementSize.getValue(this.breadcrumbConfig.size) !== '') {
      this.breadcrumbNav.nativeElement.classList.add(this.elementSize.getValue(this.breadcrumbConfig.size));
    }
    if (this.breadcrumbSeparator.getValue(this.breadcrumbConfig.separator) !== '') {
      this.breadcrumbNav.nativeElement.classList.add(this.breadcrumbSeparator.getValue(this.breadcrumbConfig.separator));
    }
    if (this.elementOrientation.getValue(this.breadcrumbConfig.orientation) !== '') {
      this.breadcrumbNav.nativeElement.classList.add(this.elementOrientation.getValue(this.breadcrumbConfig.orientation));
    }
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '',
                  breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    const breadcrumb = this.setParamsWithDefault(route, url);

    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, breadcrumb.url, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

  private setParamsWithDefault(route: ActivatedRoute, url: string = '') {
    const defaultLabel = this.breadcrumbConfig.rootName ? this.breadcrumbConfig.rootName : 'Home';
    const defaultPath = this.breadcrumbConfig.rootUrl ? this.breadcrumbConfig.rootUrl : '';
    const label = route.routeConfig ? route.routeConfig.data.breadcrumb : defaultLabel;
    const path = route.routeConfig ? route.routeConfig.path : defaultPath;
    const icon = route.routeConfig ? route.routeConfig.data.icon : '';

    const nextUrl = `${url}${path}/`;
    return  {
      label,
      url: nextUrl,
      icon,
    };
  }
}

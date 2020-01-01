import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {BreadCrumb} from './breadcrumb';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {BreadcrumbModel} from '../../models/components/breadcrumb/breadcrumb.model';
import {OrientationResolver} from '../../models/resolvers/commons/orientation.resolver';
import {SizeResolver} from '../../models/resolvers/commons/size.resolver';
import {BreadcrumbSeparatorResolver} from '../../models/resolvers/breadcrumb/breadcrumbSeparator.resolver';

@Component({
  selector: 'eba-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {

  @Input() options: BreadcrumbModel = new BreadcrumbModel();

  orientationResolver: OrientationResolver = new OrientationResolver();
  sizeResolver: SizeResolver = new SizeResolver();
  breadcrumbSeparator: BreadcrumbSeparatorResolver = new BreadcrumbSeparatorResolver();

  inactiveBreadCrumbs: BreadCrumb[] = null;
  activeBreadcrumb: BreadCrumb = null;

  @ViewChild('breadcrumbNav') breadcrumbNav: ElementRef;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {}

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

  setConfig(breadcrumb: BreadcrumbModel) {
    this.options = breadcrumb;
    if (this.sizeResolver.getValue(this.options.size) !== '') {
      this.breadcrumbNav.nativeElement.classList.add(this.sizeResolver.getValue(this.options.size));
    }
    if (this.breadcrumbSeparator.getValue(this.options.separator) !== '') {
      this.breadcrumbNav.nativeElement.classList.add(this.breadcrumbSeparator.getValue(this.options.separator));
    }
    if (this.orientationResolver.getValue(this.options.orientation) !== '') {
      this.breadcrumbNav.nativeElement.classList.add(this.orientationResolver.getValue(this.options.orientation));
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
    const defaultLabel = this.options.rootName ? this.options.rootName : 'Home';
    const defaultPath = this.options.rootUrl ? this.options.rootUrl : '';
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

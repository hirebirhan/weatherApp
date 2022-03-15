import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class AdminGuard implements CanActivate {
    paths: string[] = ['react', 'angular', 'vue'];
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const path = route.routeConfig?.path;
        if(path)
        if(this.paths.includes(path)) return true;
        return false;
    }

}



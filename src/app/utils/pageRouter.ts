import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export enum Pages {
    MainPage,
    LoginPage,
    RegisterPage,
    CheckoutPage,
    CertificateDetailsPage,
    AddCertififcatePage
}

@Injectable({
    providedIn: 'root'
})
export class PageRouter {

    private baseUrl: string = "";
    private pageMap: Map<Pages, string>;

    constructor(private router : Router) {
        this.pageMap = new Map<Pages, string>();
        this.pageMap.set(Pages.MainPage, this.baseUrl);
        this.pageMap.set(Pages.LoginPage, this.baseUrl + "/login");
        this.pageMap.set(Pages.RegisterPage, this.baseUrl + "/register");
        this.pageMap.set(Pages.CheckoutPage, this.baseUrl + "/checkout");
        this.pageMap.set(Pages.CertificateDetailsPage, this.baseUrl + "/certificate/{0}/details");
        this.pageMap.set(Pages.AddCertififcatePage, this.baseUrl + "/create/certificate");
    }

    public goToPage(page: Pages, pathParams?: string[] | undefined): void {
        this.router.navigateByUrl(this.getPath(page,pathParams));
    }

    public getPath(page: Pages, pathParams?: string[] | undefined): string {
        let result = this.pageMap.get(page)
        if (result === undefined) {
            result = this.baseUrl;
        }
        else {
            if (pathParams !== undefined) {
               result = formatString(result,pathParams);
            }
        }
        return result;
    }

    public getPreviusUrl(): string | undefined{
        return this.router.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString();
    }
}

export function formatString(path : string,args : string[]) : string{
    var formatted = path;
    for (var i = 0; i < args.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, args[i]);
    }
    return formatted;
}
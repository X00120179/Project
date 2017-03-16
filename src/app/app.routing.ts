import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
 
export const AppRoutes: any = [
    { path: "product", component: ProductComponent },
    { path: "about", component: AboutComponent },
    { path: "contact-us", component: ContactUsComponent },
];
 
export const AppComponents: any = [
    ProductComponent
];
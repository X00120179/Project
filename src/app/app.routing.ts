import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
 
export const AppRoutes: any = [
    { path: "product", component: ProductComponent },
    { path: "about", component: AboutComponent },
];
 
export const AppComponents: any = [
    ProductComponent
];
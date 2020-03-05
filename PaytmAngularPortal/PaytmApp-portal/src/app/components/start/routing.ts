	import { Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RouteProvider } from "@rxweb/angular-router"
import { Injectable } from '@angular/core';
var routings = [
    {
        path: '', redirectTo: 'bus', pathMatch:'full'
    },
    {
		path: "bus",
		loadChildren: () => import("../bus/bus/bus.module").then(m => m.BusModule)
	},
	{
		path: "bus",
		loadChildren: () => import("../bus/bus/bus.module").then(m => m.BusModule)
	},
	{
		path: "flight",
		loadChildren: () => import("../flight/flight/flight.module").then(m => m.FlightModule)
	},
	{
		path: "bus",
		loadChildren: () => import("../bus/bus/bus.module").then(m => m.BusModule)
	},
	{
		path: "flight",
		loadChildren: () => import("../flight/flight/flight.module").then(m => m.FlightModule)
	},
	{
		path: "kycs",
		loadChildren: () => import("..//kycs/kyc.module").then(m => m.KycModule)
	},
	{
		path: "bus",
		loadChildren: () => import("../bus/bus/bus.module").then(m => m.BusModule)
	},
	{
		path: "flight",
		loadChildren: () => import("../flight/flight/flight.module").then(m => m.FlightModule)
	},
	{
		path: "kycs",
		loadChildren: () => import("..//kycs/kyc.module").then(m => m.KycModule)
	},
	{
		path: "movie",
		loadChildren: () => import("../movie/movie/movie.module").then(m => m.MovieModule)
	},
	{
		path: "bus",
		loadChildren: () => import("../bus/bus/bus.module").then(m => m.BusModule)
	},
	{
		path: "flight",
		loadChildren: () => import("../flight/flight/flight.module").then(m => m.FlightModule)
	},
	{
		path: "kycs",
		loadChildren: () => import("..//kycs/kyc.module").then(m => m.KycModule)
	},
	{
		path: "movie",
		loadChildren: () => import("../movie/movie/movie.module").then(m => m.MovieModule)
	},
	{
		path: "otp",
		loadChildren: () => import("../otp/otp/otp.module").then(m => m.OtpModule)
	},
	{
		path: "bus",
		loadChildren: () => import("../bus/bus/bus.module").then(m => m.BusModule)
	},
	{
		path: "flight",
		loadChildren: () => import("../flight/flight/flight.module").then(m => m.FlightModule)
	},
	{
		path: "kycs",
		loadChildren: () => import("..//kycs/kyc.module").then(m => m.KycModule)
	},
	{
		path: "movie",
		loadChildren: () => import("../movie/movie/movie.module").then(m => m.MovieModule)
	},
	{
		path: "otp",
		loadChildren: () => import("../otp/otp/otp.module").then(m => m.OtpModule)
	},
	{
		path: "paytm-users",
		loadChildren: () => import("../paytm-user/paytm-users/paytm-user.module").then(m => m.PaytmUserModule)
	},
	{
		path: "bus",
		loadChildren: () => import("../bus/bus/bus.module").then(m => m.BusModule)
	},
	{
		path: "flight",
		loadChildren: () => import("../flight/flight/flight.module").then(m => m.FlightModule)
	},
	{
		path: "kycs",
		loadChildren: () => import("..//kycs/kyc.module").then(m => m.KycModule)
	},
	{
		path: "movie",
		loadChildren: () => import("../movie/movie/movie.module").then(m => m.MovieModule)
	},
	{
		path: "otp",
		loadChildren: () => import("../otp/otp/otp.module").then(m => m.OtpModule)
	},
	{
		path: "paytm-users",
		loadChildren: () => import("../paytm-user/paytm-users/paytm-user.module").then(m => m.PaytmUserModule)
	},
	{
		path: "cart",
		loadChildren: () => import("../shopping/cart/cart.module").then(m => m.CartModule)
	},
	{
		path: "fashion-category",
		loadChildren: () => import("../shopping/fashion-category/fashion-category.module").then(m => m.FashionCategoryModule)
	},
	{
		path: "fashion-product",
		loadChildren: () => import("../shopping/fashion-product/fashion-product.module").then(m => m.FashionProductModule)
	},
	{
		path: "fashion-sub-category",
		loadChildren: () => import("../shopping/fashion-sub-category/fashion-sub-category.module").then(m => m.FashionSubCategoryModule)
	},
	{
		path: "seller",
		loadChildren: () => import("../shopping/seller/seller.module").then(m => m.SellerModule)
	},
	{
		path: "seller-product",
		loadChildren: () => import("../shopping/seller-product/seller-product.module").then(m => m.SellerProductModule)
	},
	{
		path: "v-cart-item",
		loadChildren: () => import("../shopping/v-cart-item/v-cart-item.module").then(m => m.vCartItemModule)
	},
	{
		path: "bus",
		loadChildren: () => import("../bus/bus/bus.module").then(m => m.BusModule)
	},
	{
		path: "flight",
		loadChildren: () => import("../flight/flight/flight.module").then(m => m.FlightModule)
	},
	{
		path: "kycs",
		loadChildren: () => import("..//kycs/kyc.module").then(m => m.KycModule)
	},
	{
		path: "movie",
		loadChildren: () => import("../movie/movie/movie.module").then(m => m.MovieModule)
	},
	{
		path: "otp",
		loadChildren: () => import("../otp/otp/otp.module").then(m => m.OtpModule)
	},
	{
		path: "paytm-users",
		loadChildren: () => import("../paytm-user/paytm-users/paytm-user.module").then(m => m.PaytmUserModule)
	},
	{
		path: "cart",
		loadChildren: () => import("../shopping/cart/cart.module").then(m => m.CartModule)
	},
	{
		path: "fashion-category",
		loadChildren: () => import("../shopping/fashion-category/fashion-category.module").then(m => m.FashionCategoryModule)
	},
	{
		path: "fashion-product",
		loadChildren: () => import("../shopping/fashion-product/fashion-product.module").then(m => m.FashionProductModule)
	},
	{
		path: "fashion-sub-category",
		loadChildren: () => import("../shopping/fashion-sub-category/fashion-sub-category.module").then(m => m.FashionSubCategoryModule)
	},
	{
		path: "seller",
		loadChildren: () => import("../shopping/seller/seller.module").then(m => m.SellerModule)
	},
	{
		path: "seller-product",
		loadChildren: () => import("../shopping/seller-product/seller-product.module").then(m => m.SellerProductModule)
	},
	{
		path: "v-cart-item",
		loadChildren: () => import("../shopping/v-cart-item/v-cart-item.module").then(m => m.vCartItemModule)
	},
	{
		path: "bank-card-detail",
		loadChildren: () => import("../transaction/bank-card-detail/bank-card-detail.module").then(m => m.BankCardDetailModule)
	},
	{
		path: "transaction",
		loadChildren: () => import("../transaction/transaction/transaction.module").then(m => m.TransactionModule)
	},
	{
		path: "wallet",
		loadChildren: () => import("../transaction/wallet/wallet.module").then(m => m.WalletModule)
	},
	{
		path: "bus",
		loadChildren: () => import("../bus/bus/bus.module").then(m => m.BusModule)
	},
	{
		path: "flight",
		loadChildren: () => import("../flight/flight/flight.module").then(m => m.FlightModule)
	},
	{
		path: "kycs",
		loadChildren: () => import("..//kycs/kyc.module").then(m => m.KycModule)
	},
	{
		path: "movie",
		loadChildren: () => import("../movie/movie/movie.module").then(m => m.MovieModule)
	},
	{
		path: "otp",
		loadChildren: () => import("../otp/otp/otp.module").then(m => m.OtpModule)
	},
	{
		path: "paytm-users",
		loadChildren: () => import("../paytm-user/paytm-users/paytm-user.module").then(m => m.PaytmUserModule)
	},
	{
		path: "cart",
		loadChildren: () => import("../shopping/cart/cart.module").then(m => m.CartModule)
	},
	{
		path: "fashion-category",
		loadChildren: () => import("../shopping/fashion-category/fashion-category.module").then(m => m.FashionCategoryModule)
	},
	{
		path: "fashion-product",
		loadChildren: () => import("../shopping/fashion-product/fashion-product.module").then(m => m.FashionProductModule)
	},
	{
		path: "fashion-sub-category",
		loadChildren: () => import("../shopping/fashion-sub-category/fashion-sub-category.module").then(m => m.FashionSubCategoryModule)
	},
	{
		path: "seller",
		loadChildren: () => import("../shopping/seller/seller.module").then(m => m.SellerModule)
	},
	{
		path: "seller-product",
		loadChildren: () => import("../shopping/seller-product/seller-product.module").then(m => m.SellerProductModule)
	},
	{
		path: "v-cart-item",
		loadChildren: () => import("../shopping/v-cart-item/v-cart-item.module").then(m => m.vCartItemModule)
	},
	{
		path: "bank-card-detail",
		loadChildren: () => import("../transaction/bank-card-detail/bank-card-detail.module").then(m => m.BankCardDetailModule)
	},
	{
		path: "transaction",
		loadChildren: () => import("../transaction/transaction/transaction.module").then(m => m.TransactionModule)
	},
	{
		path: "wallet",
		loadChildren: () => import("../transaction/wallet/wallet.module").then(m => m.WalletModule)
	},
	{
		path: "user-detail",
		loadChildren: () => import("../user-detail/user-detail/user-detail.module").then(m => m.UserDetailModule)
	},
	{
		path: "recharge",
		loadChildren: () => import("../recharge/recharge/recharge.module").then(m => m.RechargeModule)
	},
	{
		path: "recharge",
		loadChildren: () => import("../recharge/recharge/recharge.module").then(m => m.RechargeModule)
	},
	{
		path: "recharge",
		loadChildren: () => import("../recharge/recharge/recharge.module").then(m => m.RechargeModule)
	},
	{
		path: "recharge",
		loadChildren: () => import("../recharge/recharge/recharge.module").then(m => m.RechargeModule)
	},
	
	{
		path: "v-fashion-product",
		loadChildren: () => import("../shopping/v-fashion-product/v-fashion-product.module").then(m => m.vFashionProductModule)
	},
	
	{
		path: "v-fashion-product",
		loadChildren: () => import("../shopping/v-fashion-product/v-fashion-product.module").then(m => m.vFashionProductModule)
	},
	
	{
		path: "v-fashion-product",
		loadChildren: () => import("../shopping/v-fashion-product/v-fashion-product.module").then(m => m.vFashionProductModule)
	},
]
        
       
        
//generated code
//])


export const ROUTES: Routes = routings;







//console.log(ROUTES)


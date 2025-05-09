type CSSModule = { readonly [key: string]: string };

declare module "*.module.scss" {
	const value: CSSModule;
	export default value;
}

import { environment } from "src/environments/environment";

/**
 * Global constant for default configurations
 */
export const config: any = []

/**
 * Styles
 */

//navbar
config["css_style_properties"] = [
  // { name: "default_radius", value: "8px" },
  // { name: "dropdown_radius", value: "5px" },
  // { name: "card_radius", value: ".375rem" },
  // { name: "field_radius", value: "8px" },
  // { name: "button_radius", value: "15px" },
]

//app
config["app_title"] = "Vendedor - " + environment.environment;
config["app_version"] = "2021.0";
config["app_developer"] = "Jamar";
config["app_developer_link"] = "https://www.jamar.com";

//Default routes
config["route_on_login"] = "/home";
config["route_on_cant_register"] = "/dashboard";
config["route_on_forbidden"] = "/403";

//Default configuration
config["users_can_unlock_their_own_user"] = true;
config["users_can_register_themselves"] = false;

//Meta tags
config["meta_description"] = `We are facilitators of the raising of projects and ideas in digital environments. Through the strategic development of marketing, branding, creative design, and product development and software strategies, we help your company have a digital impact that is agile and innovative. We provide advice for companies, projects and ideas that already have a logistical route outlined in which we can find improvement options, both in branding, marketing, software and the business model in general.`
config["meta_keywords"] = ["graphic", "design", "software", "marketing", "web", "apps", "branding", "innovation", "creation"]



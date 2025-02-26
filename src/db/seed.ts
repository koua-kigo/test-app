// src/db/seed.ts
import { db } from "./db"; // Your Drizzle DB instance
import { restaurants, users, prizes, punchCards } from "./schema"; // Your table schemas
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

async function main() {
	console.log("Seeding database...");

	// Clear existing data (optional)
	// await db.delete(restaurants).execute();

	// Seed restaurants
	await db
		.insert(restaurants)
		.values([
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.3squaresrestaurant.com/",
				name: "3 Squares",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://akamesushi888.com/index.php",
				name: "Akame Sushi",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.angenospizzamn.com/",
				name: "Angeno’s Pizza",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://restaurants.applebees.com/en-us/mn/maple-grove/14400-weaver-lake-road-82020",
				name: "Applebee’s Grill + Bar",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.arbys.com/mn/maplegrove/7885-wedgewood-lane.html",
				name: "Arby's",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.benihana.com/locations/maplegrove-mn-mg/",
				name: "Benihana",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://biaggis.com/",
				name: "Biaggi's",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.bonchon.com/ll/US/MN/Maple-Grove/11708-Elm-Creek-Blvd-N",
				name: "Bonchon",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.brickandbourbon.com/location/maple-grove/",
				name: "Brick & Bourbon",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.broadwaypizza.com/maple-grove/maple-grove",
				name: "Broadway Pizza",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.brueggers.com/us/mn/maple-grove/13384-bass-lake-rd",
				name: "Bruegger’s Bagels",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.bucadibeppo.com/us/mn/maple-grove/12650-elm-creek-blvd",
				name: "Buca di Beppo",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.bk.com/store-locator/store/4507/13840-grove-drive--maple-grove--minnesota--55311-4408",
				name: "Burger King",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://cafezupas.com/",
				name: "Cafe Zupas",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.cariboucoffee.com/us/mn/maple-grove/12850-bass-lake-road",
				name: "Caribou - Bass Lake Rd",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.cariboucoffee.com/us/mn/maple-grove/16393-county-road-30",
				name: "Caribou - County Rd 30",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.cariboucoffee.com/us/mn/maple-grove/12880-elm-creek-boulevard",
				name: "Caribou - Elm Creek Blvd N",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.cariboucoffee.com/us/mn/maple-grove/13250-grove-drive",
				name: "Caribou - Grove Dr",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.cariboucoffee.com/us/mn/maple-grove/9805-maple-grove-parkway",
				name: "Caribou - Maple Grove Pkwy",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://chanticlearpizza.com/locations/maple-grove/",
				name: "Chanticlear Pizza",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://www.chick-fil-a.com/locations/mn/maple-grove?utm_source=yext&utm_medium=link",
				name: "Chick-Fil-A",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.chipotle.com/",
				name: "Chipotle - Chipotlane",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.chipotle.com/mn/maple-grove/7750-main-st-n?utm_source=google&utm_medium=yext&utm_campaign=yext_listings",
				name: "Chipotle - Main St",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://locations.chipotle.com/mn/maple-grove/9881-maple-grove-pkwy-n?utm_source=google&utm_medium=yext&utm_campaign=yext_listings",
				name: "Chipotle - Maple Grove Pkwy",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.chipotle.com/",
				name: "Chipotle - MG Pkwy N",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://locations.chuckecheese.com/us/mn/maplegrove/12945-elm-creek-blvd.",
				name: "Chuck E. Cheese",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.coldstonecreamery.com/stores/20294",
				name: "Cold Stone Creamery",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://craveamerica.com/",
				name: "Crave",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://crispandgreen.com/locations/crisp-and-green-maple-grove/",
				name: "Crisp & Green",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://crumblcookies.com/maplegrove?utm_source=google+business&utm_medium=profile&utm_campaign=CRUMBL-US+7C+STORE+PAGE+7C+CONSIDERATION+%7C+PROFILE",
				name: "Crumbl",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.culvers.com/restaurants/maple-grove",
				name: "Culvers",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://dailydosemaplegrove.square.site/home",
				name: "Daily Dose Cafe & Espresso",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.dairyqueen.com/en-us/locations/mn/maple-grove/13770-83rd-way-n/1411/",
				name: "Dairy Queen",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://dancingganeshampls.com/#",
				name: "Dancing Ganesha",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.daveandbusters.com/us/en/about/locations/maple-grove",
				name: "Dave & Busters",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://pizza.dominos.com/minnesota/maple-grove/13590-grove-drive",
				name: "Domino's Pizza",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.dunkindonuts.com/en/mn/maple-grove/13530-grove-drive/364094",
				name: "Dunkin' Donuts",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.facebook.com/ElRodeoMexicanRestaurantMN",
				name: "El Rodeo",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.famousdaves.com/Maple-Grove",
				name: "Famous Dave’s",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://www.firehousesubs.com/store-locator/store/67f17dd0-3b17-492a-9a9c-68ef7afb11eb",
				name: "Firehouse Subs",
				description: "",
			},
			{
				imageUrl: "",
				address: "https://restaurants.fiveguys.com/7814-main-street-north",
				name: "Five Guys",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://frankiespizza.com/",
				name: "Frankie's Pizza",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.freddys.com/order",
				name: "Freddy’s",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.goldencorral.com/locations/location-detail/2677/golden-corral-grove-drive/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=2677",
				name: "Golden Corral",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.grabbagreen.com/pressroom/2017/gr-051117-opens-in-maple-grove.php",
				name: "Grabbagreen",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.gracklegrove.com/",
				name: "Grackle",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.gcfb.com/",
				name: "Granite City",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.thegreatgreekgrill.com/maple-grove-mn",
				name: "Great Greek Mediterranean Grill",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "http://maplegrovebread.com/",
				name: "Great Harvest Bread",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://grillhallbraziliansteakhouse.com/",
				name: "Grill Hall",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://hawaiipokeusa.com/apple-valley-hawaii-poke-bowl-locations",
				name: "Hawaii Poke Bowl",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.rushcreek.com/the-highlander",
				name: "Highlander at Rush Creek",
				description: "",
			},
			{
				imageUrl: "",
				address: "https://www.hometownepizza.com/",
				name: "Hometowne pizza",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://hongkongmaplegrove.com/index.html",
				name: "Hong Kong",
				description: "",
			},
			{
				imageUrl: "",
				address: "https://www.maplegrove.ichiddo.com/",
				name: "Ichiddo Ramen",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.jerseymikes.com/24009/maple-grove-mn",
				name: "Jersey Mike's",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.jetspizza.com/stores/minnesota/maple-grove/16338-county-rd-30/",
				name: "Jet's Pizza",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.jimmyjohns.com/mn/maplegrove/sandwiches-1595.html?utm_source=google20business&utm_medium=organic&utm_campaign=website%20link",
				name: "Jimmy John's - Bass Lake Rd N",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.jimmyjohns.com/mn/maplegrove/sandwiches-3955.html?utm_source=google20business&utm_medium=organic&utm_campaign=website%20link",
				name: "Jimmy John's - Blackoaks Ln N",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://locations.jimmyjohns.com/mn/maplegrove/sandwiches-1184.html?utm_source=google20business&utm_medium=organic&utm_campaign=website%20link",
				name: "Jimmy John's - Wedgewood Ln N",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://thekpot.com/location/maple-grove-mn/",
				name: "K pot",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.kingdomcoffeemn.com/",
				name: "Kingdom Coffee",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.leeannchin.com/restaurant/maple-grove-dunkirk-lane-mn/9428-dunkirk-lane-north",
				name: "Leeann Chin",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.lookoutbarandgrill.com/",
				name: "Lookout Bar & Grill",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.lotusmaplegrove.com/",
				name: "Lotus",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://lundsandbyerlys.com/our-stores/locations/maple-grove/",
				name: "Lunds & Byerlys Cafe",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://malonesbarandgrill.net/",
				name: "Malone’s Bar & Grill",
				description: "",
			},
			{
				imageUrl: "",
				address: "https://mamags.com/",
				name: "Mama G’s Restaurant and Bar",
				description: "",
			},
			{
				imageUrl: "",
				address: "https://www.mangomangodessert.com/",
				name: "Mango Mango",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.mcdonalds.com/us/en-us/location/MN/MAPLE-GROVE/13595-83RD-WAY/12407.html?cid=RF:YXT:GMB::Clicks",
				name: "McDonald's - 83rd Way N",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.mcdonalds.com/us/en-us/location/MN/MAPLE-GROVE/9530-BLACK-OAKS-AVE/24304.html?cid=RF:YXT:GMB::Clicks",
				name: "McDonald's - Blackoaks Ln N",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://www.mcdonalds.com/us/en-us/location/MN/MAPLE-GROVE/6255-SYCAMORE-LANE-NORTH/5976.html?cid=RF:YXT:GMB::Clicks",
				name: "McDonald's - Sycamore Ln N",
				description: "",
			},
			{
				imageUrl: "",
				address: "https://www.nadiacakes.com/",
				name: "Nadia Cakes",
				description: "",
			},
			{
				imageUrl: "",
				address: "https://www.nafnafgrill.com/",
				name: "Naf Naf Grill",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://nauticalbowls.com/",
				name: "Nautical Bowls",
				description: "",
			},
			{
				imageUrl: "",
				address: "https://www.nice2meetchamn.com/",
				name: "Nice 2 Meet Cha",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.noodles.com/location",
				name: "Noodles & Company",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://northerntaphouse.com/",
				name: "Northern Tap House",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://www.nothingbundtcakes.com/all-products/?utm_medium=organic&utm_source=gbplisting&location=0199&fulfillment=04/15/2024",
				name: "Nothing Bundt Cakes",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.olivegarden.com/locations/mn/maple-grove/maple-grove/1534?cmpid=br:og_ag:ie_ch:loc_ca:OGGMB_sn:gmb_gt:maple-grove-mn-1534_pl:locurl_rd:1404",
				name: "Olive Garden",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.omnibrewing.com/",
				name: "Omni Brewery",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://optimalperformancegolf.com/",
				name: "Optimal Performance Golf",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://ophmg.com/",
				name: "Original Pancake House",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.pfchangs.com/locations/us/mn/maple-grove/12071-elm-creek-blvd/9958-maple-grove.html",
				name: "P.F Chang’s",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://pancheros.com/",
				name: "Pancheros",
				description: "",
			},
			{
				imageUrl: "",
				address: "https://www.pandaexpress.com/",
				name: "Panda Express",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.panerabread.com/en-us/cafe/locations/mn/maple-grove/7778-main-street-n?utm_medium=local&utm_source=google&utm_campaign=dpm-dist&utm_term=601303&utm_content=main",
				name: "Panera",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.papamurphys.com/mn/maple-grove/8097-wedgewood-lane-north?utm_source=organic&utm_medium=gmb&utm_campaign=yext",
				name: "Papa Murphy’s",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://parisbaguette.com/locations/",
				name: "Paris Baguette",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.perkinsrestaurants.com/locations/us/mn/maple-grove/11801-73rd-ave-n/",
				name: "Perkins",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://pintsandpaddle.com/",
				name: "Pints & Paddle",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://pittsburghbluesteak.com/maple-grove/",
				name: "Pittsburgh Blue Steakhouse",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://locations.pizzahut.com/mn/maple-grove/6342-vinewood-ln?utm_medium=organic&utm_source=local&utm_campaign=googlelistings&utm_content=website&utm_term=311993",
				name: "Pizza Hut",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://order.pizzakarma.com/order/?branchId=5f1955e7a31b160e2fec81eb&branchName=Maple20&search=&servingOptionType=pickup/",
				name: "Pizza Karma",
				description: "",
			},
			{
				imageUrl: "",
				address: "https://www.pizzamanmg.com/",
				name: "Pizza Man",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.portillos.com/locations/maplegrove/?utm_source=google&utm_medium=yext&utm_campaign=website",
				name: "Portillos",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.potbelly.com/locations/minnesota/maple-grove",
				name: "Potbelly",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://punchpizza.com/locations/maple-grove/",
				name: "Punch Pizza",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://locations.raisingcanes.com/mn/maple-grove/9875-maple-grove-pkwy",
				name: "Raising Cane’s",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.redstonegrill.com/",
				name: "Redstone Grill",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://rivieramayamn.com/",
				name: "Riviera Maya",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.rodiziogrill.com/maplegrove/",
				name: "Rodizio Grill",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://rojomexicangrill.com/",
				name: "Rojo",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://rustytaco.com/",
				name: "Rusty Taco",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.sawatdee.com/maple-grove",
				name: "Sawatdee Thai Cuisine",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://shakeshack.com/location/maple-grove-mn?utm_source=G&utm_medium=local&utm_campaign=google-local#/",
				name: "Shake Shack",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.starbucks.com/store-locator/store/1026660/hy-vee-maple-grove-1401-18755-70th-way-north-maple-grove-mn-55311-us",
				name: "Starbucks - 70th Wy N",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.starbucks.com/store-locator/store/91096/maple-grove-dunkirk-square-9404-dunkirk-lane-maple-grove-mn-553111220-us",
				name: "Starbucks - Dunkirk Ln N",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.starbucks.com/store-locator/store/1033274/hemlock-elm-creek-pkwy-11850-elm-creek-boulevard-n-maple-grove-mn-55369-u",
				name: "Starbucks - Elm Creek Blvd",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.starbucks.com/store-locator/store/6527/target-maple-grove-2193-15300-grove-circle-n-maple-grove-mn-553694469-us",
				name: "Starbucks - Grove Cir N",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.starbucks.com/store-locator/store/12142/7979-wedgewood-lane-7979-wedgewood-lane-maple-grove-mn-553699411-us",
				name: "Starbucks - Wedgewood Ln",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://restaurants.subway.com/united-states/mn/maple-grove/9660-63rd-ave-n?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=35292&utm_campaign=evergreen-2020",
				name: "Subway - 63rd Ave N",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://restaurants.subway.com/united-states/mn/maple-grove/12744-bass-lake-rd?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=16428&utm_campaign=evergreen-2020",
				name: "Subway - Bass Lake Ctr",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://restaurants.subway.com/united-states/mn/maple-grove/9451-dunkirk-ln-n?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=12949&utm_campaign=evergreen-2020",
				name: "Subway - Dunkirk Ln N",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://restaurants.subway.com/united-states/mn/maple-grove/9869-maple-grove-parkway-north?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=43871&utm_campaign=evergreen-2020",
				name: "Subway - Grove Village shopping ctr",
				description: "",
			},
			{
				imageUrl: "",
				address:
					"https://restaurants.subway.com/united-states/mn/maple-grove/13758-83rd-way?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=5063&utm_campaign=evergreen-2020",
				name: "Subway - Rice Lake Plaza",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.tacobell.com/mn/maple-grove/13910-grove-dr.html?utm_source=yext&utm_campaign=googlelistings&utm_medium=referral&utm_term=004850&utm_content=website&y_source=1_NjE0NjQwMi03MTUtbG9jYXRpb24ud2Vic2l0ZQ3D",
				name: "Taco Bell - Grove Dr",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.tacobell.com/mn/maple-grove/9816-hospital-drive-n-.html?utm_source=yext&utm_campaign=googlelistings&utm_medium=referral&utm_term=036439&utm_content=website&y_source=1_MTk3Nzc3MDMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
				name: "Taco Bell - Hospital Dr",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.tacojohns.com/mn/maple-grove/13320-grove-dr/",
				name: "Taco John's",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.grovetandoor.com/",
				name: "Tandoor",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.tensushimn.com/",
				name: "Ten Sushi",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://teresasmn.com/",
				name: "Teresa’s",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.tgifridays.com/mn/maple-grove/11830-fountains-way.html",
				name: "TGI Fridays",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://www.thaiexpressfood.com/stores/60398?utm_source=gmb&utm_medium=gmb&utm_campaign=gmb&utm_id=gmb",
				name: "Thai Express",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://tonomn.com/locations/maplegrove/",
				name: "Tono Pizzeria + Cheesesteaks",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://uffdadonuts.com/",
				name: "Uffda Donuts",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.urbanwokusa.com/locations",
				name: "Urban Wok",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.villageinn.com/maplegrove-mn",
				name: "Village Inn",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address:
					"https://locations.wendys.com/united-states/mn/maple-grove/13645-83rd-way-n",
				name: "Wendy's",
				description: "",
			},
			{
				imageUrl: "",
				address: "https://www.whirlyballtwincities.com/",
				name: "WhirlyBall",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "https://www.whitecastle.com/locations/1324",
				name: "White Castle",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "http://www.yogurtlabs.com/",
				name: "Yogurt Lab",
				description: "",
			},
			{
				imageUrl:
					"https://experiencemaplegrove.com/wp-content/plugins/essential-grid/public/assets/images/300x200transparent.png",
				address: "http://doyufong.com/lander",
				name: "Yu Fong",
				description: "",
			},
		])
		.execute();

	// Seed other tables as needed
	console.log("Seed completed successfully");
}

main()
	.catch((e) => {
		console.error("Seed failed");
		console.error(e);
		process.exit(1);
	})
	.finally(() => {
		process.exit(0);
	});

This file is a merged representation of a subset of the codebase, containing specifically included files and files not matching ignore patterns, combined into a single document by Repomix.
The content has been processed where comments have been removed, empty lines have been removed.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/**/*.ts, src/**/*.tsx, src/**/*.js, src/**/*.jsx, src/**/*.md, src/**/*.mdx, src/**/*.json, scripts/**/*.ts, scripts/**/*.tsx, scripts/**/*.js, scripts/**/*.jsx, scripts/**/*.md, scripts/**/*.mdx
- Files matching these patterns are excluded: node_modules/**, dist/**, build/**, .next/**, public/**, .git/**, coverage/**, .storybook/**, .vscode/**, .github/**, **/*.test.*, **/*.spec.*, **/*.min.*, **/*.d.ts
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Code comments have been removed from supported file types
- Empty lines have been removed from all files
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
scripts/
  final-restaurant-enricher.ts
  firecrawl-extractor.js
  hybrid-scraper.js
  scrape-restaurants.js
src/
  actions/
    deals.ts
    restaurants.ts
    scan-actions.ts
  app/
    (public)/
      deals/
        page.tsx
      restaurants/
        [id]/
          page.tsx
        page.tsx
      sign-in/
        [[...sign-in]]/
          page.tsx
      sign-up/
        [[...sign-up]]/
          page.tsx
    admin/
      deals/
        [id]/
          edit/
            page.tsx
          page.tsx
        new/
          page.tsx
        page.tsx
      restaurants/
        [id]/
          page.tsx
        bulk-qr/
          page.tsx
        new/
          page.tsx
        actions.ts
        bulk-qr-code-manager.tsx
        bulk-qr.tsx
        dummy-components.tsx
        index.tsx
        page.tsx
        qr-code-manager.tsx
        selectable-restaurants-table.tsx
      users/
        page.tsx
      layout.tsx
      page.tsx
    api/
      restaurants/
        [id]/
          scan/
            route.ts
          route.ts
      sse/
        route.ts
      users/
        [id]/
          punchcards/
            route.ts
          route.ts
      webhooks/
        route.ts
    components/
      ui/
        BookTestimonial3D.tsx
    leaderboard/
      page.tsx
    users/
      [id]/
        profile/
          page.tsx
    layout.tsx
    page.tsx
  components/
    admin/
      deals/
        actions.ts
        deal-detail.tsx
        deal-filters.tsx
        deals-table.tsx
        edit-deal-form.tsx
        index.ts
        new-deal-form.tsx
      admin-content.tsx
      admin-dashboard-content.tsx
      admin-ui.tsx
      csv-upload.tsx
      expandable-admin-menu.tsx
      prize-card.tsx
      punch-cards-list.tsx
      restaurant-deals-display.tsx
      restaurant-detail-modal.tsx
      restaurant-form.tsx
      restaurant-quick-view.tsx
      restaurants-table.tsx
      Sidebar.tsx
      SidebarContext.tsx
    BounceCards/
      BounceCards.tsx
    camera-permission-checker/
      camera-permission-checker.tsx
      index.ts
      README.md
    glitchFx/
      glitchFx.tsx
      index.tsx
    icons/
      BookMarked.tsx
      index.tsx
      info-card.tsx
      Martini.tsx
      PartyPopper.tsx
      Percent.tsx
      Salad.tsx
      ThumbsDown.tsx
      ThumbsUp.tsx
      Wine.tsx
    kokonutui/
      bento-grid.tsx
      btn-08.tsx
      card-10.tsx
      list-01.tsx
      list-02.tsx
      profile-02.tsx
      profile-04.tsx
    leaderboard/
      restaurant-leaderboard.tsx
      user-leaderboard.tsx
    magicui/
      dot-pattern.tsx
    motion-primitives/
      animated-group.tsx
      animated-number.tsx
    nav/
      nav-scanner.tsx
      nav.stories.tsx
      nav.tsx
    progress-indicator/
      index.tsx
      progress-indicator.tsx
    ui/
      alert-dialog.tsx
      alert.tsx
      animated-modal.tsx
      avatar.tsx
      badge.tsx
      button.tsx
      card.tsx
      checkbox.tsx
      data-table.tsx
      dialog.tsx
      divider.tsx
      dropdown-menu.tsx
      form.tsx
      hero-parallax.tsx
      in-view.tsx
      input.tsx
      label.tsx
      progress.tsx
      punchcard.tsx
      restaurant-punch-card.tsx
      restaurant-specific-user-punch-card.tsx
      select.tsx
      separator.tsx
      sheet.tsx
      sidebar.tsx
      skeleton.tsx
      sonner.tsx
      spinner.tsx
      switch.tsx
      table.tsx
      tabs.tsx
      textarea.tsx
      tooltip.tsx
      visually-hidden.tsx
    wallet-ui/
      index.ts
      index.tsx
      wallet-ui.stories.tsx
      wallet-ui.tsx
    button-drawer.tsx
    logo.tsx
    UserButton.tsx
  context/
    location-context.tsx
    style-wrapper.tsx
    user-context.tsx
  db/
    models/
      achievements/
        achievements.ts
        index.ts
      leaderboard/
        leaderboard.ts
      point-balances/
        index.ts
        point-balances.ts
      point-transfers/
        index.ts
        point-transfers.ts
      prize-redemptions/
        index.ts
        prize-redemptions.ts
      prizes/
        index.ts
        prizes.ts
      punch-cards/
        index.ts
        punch-cards.ts
      raffle-entries/
        index.ts
        raffle-entries.ts
      restaurants/
        index.ts
        restaurants.ts
      users/
        index.ts
        users.ts
      index.ts
    db.ts
    index.ts
    migrate.ts
    relations.ts
    schema.ts
    supabase.ts
  features/
    deals/
      DealsList.tsx
      index.ts
    prizes/
      prize-card/
        PrizeCard.tsx
    restaurants/
      restaurant-detail/
        RestaurantDetail.tsx
      AdminRestaurantSearchBar.tsx
      index.ts
      Restaurant.tsx
      RestaurantCard.tsx
      RestaurantList.tsx
      RestaurantLoading.tsx
      RestaurantSearchBar.tsx
      UserFacingRestaurantDetail.tsx
    users/
      passport/
        index.tsx
        passport.tsx
      GetUserPunchCard.tsx
      index.ts
      lottery-status.tsx
      share-punch-menu.tsx
      UserPunchCard.tsx
      UserPunchCards.tsx
  hooks/
    index.ts
    use-geolocation.tsx
    use-handle-bulk-qr-code.tsx
    use-handle-qr-code.tsx
    use-handle-qrCode.tsx
    use-mobile.tsx
    use-punch-card-subscription.ts
    use-server-sent-event.tsx
    use-toast.tsx
    use-websocket.tsx
    useRestaurantSearch.tsx
  lib/
    auth.ts
    constants.ts
    csv.ts
    svg-to-data-url.ts
    utils.ts
  stories/
    Button.stories.ts
    Button.tsx
    Configure.mdx
    Header.stories.ts
    Header.tsx
    Page.stories.ts
    Page.tsx
  types/
    api.ts
    db.ts
    index.ts
    schemas.ts
  middleware.ts
```

# Files

## File: scripts/final-restaurant-enricher.ts
````typescript
const fs = require("node:fs");
const path = require("node:path");
const Papa = require("papaparse");
const axios = require("axios");
const { z } = require("zod");
import FirecrawlApp from "@mendable/firecrawl-js";
const app = new FirecrawlApp({
	apiKey: process.env.FIRECRAWL_API_KEY,
});
const restaurants = [
	{
		id: 23,
		name: "3 Squares",
		url: "https://www.3squaresrestaurant.com/",
		"description\r": "\r",
	},
	{
		id: 24,
		name: "Akame Sushi",
		url: "https://akamesushi888.com/index.php",
		"description\r": "\r",
	},
	{
		id: 25,
		name: "Angeno's Pizza",
		url: "https://www.angenospizzamn.com/",
		"description\r": "\r",
	},
	{
		id: 26,
		name: "Applebee's Grill + Bar",
		url: "https://restaurants.applebees.com/en-us/mn/maple-grove/14400-weaver-lake-road-82020",
		"description\r": "\r",
	},
	{
		id: 27,
		name: "Arby's",
		url: "https://locations.arbys.com/mn/maplegrove/7885-wedgewood-lane.html",
		"description\r": "\r",
	},
	{
		id: 28,
		name: "Benihana",
		url: "https://www.benihana.com/locations/maplegrove-mn-mg/",
		"description\r": "\r",
	},
	{
		id: 29,
		name: "Biaggi's",
		url: "https://biaggis.com/",
		"description\r": "\r",
	},
	{
		id: 30,
		name: "Bonchon",
		url: "https://locations.bonchon.com/ll/US/MN/Maple-Grove/11708-Elm-Creek-Blvd-N",
		"description\r": "\r",
	},
	{
		id: 31,
		name: "Brick & Bourbon",
		url: "https://www.brickandbourbon.com/location/maple-grove/",
		"description\r": "\r",
	},
	{
		id: 32,
		name: "Broadway Pizza",
		url: "https://www.broadwaypizza.com/maple-grove/maple-grove",
		"description\r": "\r",
	},
	{
		id: 33,
		name: "Bruegger's Bagels",
		url: "https://locations.brueggers.com/us/mn/maple-grove/13384-bass-lake-rd",
		"description\r": "\r",
	},
	{
		id: 34,
		name: "Buca di Beppo",
		url: "https://locations.bucadibeppo.com/us/mn/maple-grove/12650-elm-creek-blvd",
		"description\r": "\r",
	},
	{
		id: 35,
		name: "Burger King",
		url: "https://www.bk.com/store-locator/store/4507/13840-grove-drive--maple-grove--minnesota--55311-4408",
		"description\r": "\r",
	},
	{
		id: 36,
		name: "Cafe Zupas",
		url: "https://cafezupas.com/",
		"description\r": "\r",
	},
	{
		id: 37,
		name: "Caribou - Bass Lake Rd",
		url: "https://locations.cariboucoffee.com/us/mn/maple-grove/12850-bass-lake-road",
		"description\r": "\r",
	},
	{
		id: 38,
		name: "Caribou - County Rd 30",
		url: "https://locations.cariboucoffee.com/us/mn/maple-grove/16393-county-road-30",
		"description\r": "\r",
	},
	{
		id: 39,
		name: "Caribou - Elm Creek Blvd N",
		url: "https://locations.cariboucoffee.com/us/mn/maple-grove/12880-elm-creek-boulevard",
		"description\r": "\r",
	},
	{
		id: 40,
		name: "Caribou - Grove Dr",
		url: "https://locations.cariboucoffee.com/us/mn/maple-grove/13250-grove-drive",
		"description\r": "\r",
	},
	{
		id: 41,
		name: "Caribou - Maple Grove Pkwy",
		url: "https://locations.cariboucoffee.com/us/mn/maple-grove/9805-maple-grove-parkway",
		"description\r": "\r",
	},
	{
		id: 42,
		name: "Chanticlear Pizza",
		url: "https://chanticlearpizza.com/locations/maple-grove/",
		"description\r": "\r",
	},
	{
		id: 43,
		name: "Chick-Fil-A",
		url: "https://www.chick-fil-a.com/locations/mn/maple-grove?utm_source=yext&utm_medium=link",
		"description\r": "\r",
	},
	{
		id: 44,
		name: "Chipotle - Chipotlane",
		url: "https://www.chipotle.com/",
		"description\r": "\r",
	},
	{
		id: 45,
		name: "Chipotle - Main St",
		url: "https://locations.chipotle.com/mn/maple-grove/7750-main-st-n?utm_source=google&utm_medium=yext&utm_campaign=yext_listings",
		"description\r": "\r",
	},
	{
		id: 46,
		name: "Chipotle - Maple Grove Pkwy",
		url: "https://locations.chipotle.com/mn/maple-grove/9881-maple-grove-pkwy-n?utm_source=google&utm_medium=yext&utm_campaign=yext_listings",
		"description\r": "\r",
	},
	{
		id: 47,
		name: "Chipotle - MG Pkwy N",
		url: "https://www.chipotle.com/",
		"description\r": "\r",
	},
	{
		id: 48,
		name: "Chuck E. Cheese",
		url: "https://locations.chuckecheese.com/us/mn/maplegrove/12945-elm-creek-blvd.",
		"description\r": "\r",
	},
	{
		id: 157,
		name: "Clubhaus Agency",
		url: "3020 Garfield Ave",
		"description\r": "Description here \r",
	},
	{
		id: 49,
		name: "Cold Stone Creamery",
		url: "https://www.coldstonecreamery.com/stores/20294",
		"description\r": "\r",
	},
	{
		id: 50,
		name: "Crave",
		url: "https://craveamerica.com/",
		"description\r": "\r",
	},
	{
		id: 51,
		name: "Crisp & Green",
		url: "https://crispandgreen.com/locations/crisp-and-green-maple-grove/",
		"description\r": "\r",
	},
	{
		id: 52,
		name: "Crumbl",
		url: "https://crumblcookies.com/maplegrove?utm_source=google+business&utm_medium=profile&utm_campaign=CRUMBL-US+7C+STORE+PAGE+7C+CONSIDERATION+%7C+PROFILE",
		"description\r": "\r",
	},
	{
		id: 53,
		name: "Culvers",
		url: "https://www.culvers.com/restaurants/maple-grove",
		"description\r": "\r",
	},
	{
		id: 54,
		name: "Daily Dose Cafe & Espresso",
		url: "https://dailydosemaplegrove.square.site/home",
		"description\r": "\r",
	},
	{
		id: 55,
		name: "Dairy Queen",
		url: "https://www.dairyqueen.com/en-us/locations/mn/maple-grove/13770-83rd-way-n/1411/",
		"description\r": "\r",
	},
	{
		id: 56,
		name: "Dancing Ganesha",
		url: "https://dancingganeshampls.com/#",
		"description\r": "\r",
	},
	{
		id: 57,
		name: "Dave & Busters",
		url: "https://www.daveandbusters.com/us/en/about/locations/maple-grove",
		"description\r": "\r",
	},
	{
		id: 58,
		name: "Domino's Pizza",
		url: "https://pizza.dominos.com/minnesota/maple-grove/13590-grove-drive",
		"description\r": "\r",
	},
	{
		id: 59,
		name: "Dunkin' Donuts",
		url: "https://locations.dunkindonuts.com/en/mn/maple-grove/13530-grove-drive/364094",
		"description\r": "\r",
	},
	{
		id: 60,
		name: "El Rodeo",
		url: "https://www.facebook.com/ElRodeoMexicanRestaurantMN",
		"description\r": "\r",
	},
	{
		id: 61,
		name: "Famous Dave's",
		url: "https://www.famousdaves.com/Maple-Grove",
		"description\r": "\r",
	},
	{
		id: 62,
		name: "Firehouse Subs",
		url: "https://www.firehousesubs.com/store-locator/store/67f17dd0-3b17-492a-9a9c-68ef7afb11eb",
		"description\r": "\r",
	},
	{
		id: 63,
		name: "Five Guys",
		url: "https://restaurants.fiveguys.com/7814-main-street-north",
		"description\r": "\r",
	},
	{
		id: 64,
		name: "Frankie's Pizza",
		url: "https://frankiespizza.com/",
		"description\r": "\r",
	},
	{
		id: 65,
		name: "Freddy's",
		url: "https://www.freddys.com/order",
		"description\r": "\r",
	},
	{
		id: 66,
		name: "Golden Corral",
		url: "https://www.goldencorral.com/locations/location-detail/2677/golden-corral-grove-drive/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=2677",
		"description\r": "\r",
	},
	{
		id: 67,
		name: "Grabbagreen",
		url: "https://www.grabbagreen.com/pressroom/2017/gr-051117-opens-in-maple-grove.php",
		"description\r": "\r",
	},
	{
		id: 68,
		name: "Grackle",
		url: "https://www.gracklegrove.com/",
		"description\r": "\r",
	},
	{
		id: 69,
		name: "Granite City",
		url: "https://www.gcfb.com/",
		"description\r": "\r",
	},
	{
		id: 70,
		name: "Great Greek Mediterranean Grill",
		url: "https://www.thegreatgreekgrill.com/maple-grove-mn",
		"description\r": "\r",
	},
	{
		id: 71,
		name: "Great Harvest Bread",
		url: "http://maplegrovebread.com/",
		"description\r": "\r",
	},
	{
		id: 72,
		name: "Grill Hall",
		url: "https://grillhallbraziliansteakhouse.com/",
		"description\r": "\r",
	},
	{
		id: 73,
		name: "Hawaii Poke Bowl",
		url: "https://hawaiipokeusa.com/apple-valley-hawaii-poke-bowl-locations",
		"description\r": "\r",
	},
	{
		id: 74,
		name: "Highlander at Rush Creek",
		url: "https://www.rushcreek.com/the-highlander",
		"description\r": "\r",
	},
	{
		id: 75,
		name: "Hometowne pizza",
		url: "https://www.hometownepizza.com/",
		"description\r": "\r",
	},
	{
		id: 76,
		name: "Hong Kong",
		url: "https://hongkongmaplegrove.com/index.html",
		"description\r": "\r",
	},
	{
		id: 77,
		name: "Ichiddo Ramen",
		url: "https://www.maplegrove.ichiddo.com/",
		"description\r": "\r",
	},
	{
		id: 78,
		name: "Jersey Mike's",
		url: "https://www.jerseymikes.com/24009/maple-grove-mn",
		"description\r": "\r",
	},
	{
		id: 79,
		name: "Jet's Pizza",
		url: "https://www.jetspizza.com/stores/minnesota/maple-grove/16338-county-rd-30/",
		"description\r": "\r",
	},
	{
		id: 80,
		name: "Jimmy John's - Bass Lake Rd N",
		url: "https://locations.jimmyjohns.com/mn/maplegrove/sandwiches-1595.html?utm_source=google20business&utm_medium=organic&utm_campaign=website%20link",
		"description\r": "\r",
	},
	{
		id: 81,
		name: "Jimmy John's - Blackoaks Ln N",
		url: "https://locations.jimmyjohns.com/mn/maplegrove/sandwiches-3955.html?utm_source=google20business&utm_medium=organic&utm_campaign=website%20link",
		"description\r": "\r",
	},
	{
		id: 82,
		name: "Jimmy John's - Wedgewood Ln N",
		url: "https://locations.jimmyjohns.com/mn/maplegrove/sandwiches-1184.html?utm_source=google20business&utm_medium=organic&utm_campaign=website%20link",
		"description\r": "\r",
	},
	{
		id: 83,
		name: "K pot",
		url: "https://thekpot.com/location/maple-grove-mn/",
		"description\r": "\r",
	},
	{
		id: 84,
		name: "Kingdom Coffee",
		url: "https://www.kingdomcoffeemn.com/",
		"description\r": "\r",
	},
	{
		id: 85,
		name: "Leeann Chin",
		url: "https://www.leeannchin.com/restaurant/maple-grove-dunkirk-lane-mn/9428-dunkirk-lane-north",
		"description\r": "\r",
	},
	{
		id: 86,
		name: "Lookout Bar & Grill",
		url: "https://www.lookoutbarandgrill.com/",
		"description\r": "\r",
	},
	{
		id: 87,
		name: "Lotus",
		url: "https://www.lotusmaplegrove.com/",
		"description\r": "\r",
	},
	{
		id: 88,
		name: "Lunds & Byerlys Cafe",
		url: "https://lundsandbyerlys.com/our-stores/locations/maple-grove/",
		"description\r": "\r",
	},
	{
		id: 89,
		name: "Malone's Bar & Grill",
		url: "https://malonesbarandgrill.net/",
		"description\r": "\r",
	},
	{
		id: 90,
		name: "Mama G's Restaurant and Bar",
		url: "https://mamags.com/",
		"description\r": "\r",
	},
	{
		id: 91,
		name: "Mango Mango",
		url: "https://www.mangomangodessert.com/",
		"description\r": "\r",
	},
	{
		id: 92,
		name: "McDonald's - 83rd Way N",
		url: "https://www.mcdonalds.com/us/en-us/location/MN/MAPLE-GROVE/13595-83RD-WAY/12407.html?cid=RF:YXT:GMB::Clicks",
		"description\r": "\r",
	},
	{
		id: 93,
		name: "McDonald's - Blackoaks Ln N",
		url: "https://www.mcdonalds.com/us/en-us/location/MN/MAPLE-GROVE/9530-BLACK-OAKS-AVE/24304.html?cid=RF:YXT:GMB::Clicks",
		"description\r": "\r",
	},
	{
		id: 94,
		name: "McDonald's - Sycamore Ln N",
		url: "https://www.mcdonalds.com/us/en-us/location/MN/MAPLE-GROVE/6255-SYCAMORE-LANE-NORTH/5976.html?cid=RF:YXT:GMB::Clicks",
		"description\r": "\r",
	},
	{
		id: 95,
		name: "Nadia Cakes",
		url: "https://www.nadiacakes.com/",
		"description\r": "\r",
	},
	{
		id: 96,
		name: "Naf Naf Grill",
		url: "https://www.nafnafgrill.com/",
		"description\r": "\r",
	},
	{
		id: 97,
		name: "Nautical Bowls",
		url: "https://nauticalbowls.com/",
		"description\r": "\r",
	},
	{
		id: 98,
		name: "Nice 2 Meet Cha",
		url: "https://www.nice2meetchamn.com/",
		"description\r": "\r",
	},
	{
		id: 99,
		name: "Noodles & Company",
		url: "https://www.noodles.com/location",
		"description\r": "\r",
	},
	{
		id: 100,
		name: "Northern Tap House",
		url: "https://northerntaphouse.com/",
		"description\r": "\r",
	},
	{
		id: 101,
		name: "Nothing Bundt Cakes",
		url: "https://www.nothingbundtcakes.com/all-products/?utm_medium=organic&utm_source=gbplisting&location=0199&fulfillment=04/15/2024",
		"description\r": "\r",
	},
	{
		id: 102,
		name: "Olive Garden",
		url: "https://www.olivegarden.com/locations/mn/maple-grove/maple-grove/1534?cmpid=br:og_ag:ie_ch:loc_ca:OGGMB_sn:gmb_gt:maple-grove-mn-1534_pl:locurl_rd:1404",
		"description\r": "\r",
	},
	{
		id: 103,
		name: "Omni Brewery",
		url: "https://www.omnibrewing.com/",
		"description\r": "\r",
	},
	{
		id: 104,
		name: "Optimal Performance Golf",
		url: "https://optimalperformancegolf.com/",
		"description\r": "\r",
	},
	{
		id: 105,
		name: "Original Pancake House",
		url: "https://ophmg.com/",
		"description\r": "\r",
	},
	{
		id: 106,
		name: "P.F Chang's",
		url: "https://www.pfchangs.com/locations/us/mn/maple-grove/12071-elm-creek-blvd/9958-maple-grove.html",
		"description\r": "\r",
	},
	{
		id: 107,
		name: "Pancheros",
		url: "https://pancheros.com/",
		"description\r": "\r",
	},
	{
		id: 108,
		name: "Panda Express",
		url: "https://www.pandaexpress.com/",
		"description\r": "\r",
	},
	{
		id: 109,
		name: "Panera",
		url: "https://www.panerabread.com/en-us/cafe/locations/mn/maple-grove/7778-main-street-n?utm_medium=local&utm_source=google&utm_campaign=dpm-dist&utm_term=601303&utm_content=main",
		"description\r": "\r",
	},
	{
		id: 110,
		name: "Papa Murphy's",
		url: "https://locations.papamurphys.com/mn/maple-grove/8097-wedgewood-lane-north?utm_source=organic&utm_medium=gmb&utm_campaign=yext",
		"description\r": "\r",
	},
	{
		id: 111,
		name: "Paris Baguette",
		url: "https://parisbaguette.com/locations/",
		"description\r": "\r",
	},
	{
		id: 112,
		name: "Perkins",
		url: "https://www.perkinsrestaurants.com/locations/us/mn/maple-grove/11801-73rd-ave-n/",
		"description\r": "\r",
	},
	{
		id: 113,
		name: "Pints & Paddle",
		url: "https://pintsandpaddle.com/",
		"description\r": "\r",
	},
	{
		id: 114,
		name: "Pittsburgh Blue Steakhouse",
		url: "https://pittsburghbluesteak.com/maple-grove/",
		"description\r": "\r",
	},
	{
		id: 115,
		name: "Pizza Hut",
		url: "https://locations.pizzahut.com/mn/maple-grove/6342-vinewood-ln?utm_medium=organic&utm_source=local&utm_campaign=googlelistings&utm_content=website&utm_term=311993",
		"description\r": "\r",
	},
	{
		id: 116,
		name: "Pizza Karma",
		url: "https://order.pizzakarma.com/order/?branchId=5f1955e7a31b160e2fec81eb&branchName=Maple20&search=&servingOptionType=pickup/",
		"description\r": "\r",
	},
	{
		id: 117,
		name: "Pizza Man",
		url: "https://www.pizzamanmg.com/",
		"description\r": "\r",
	},
	{
		id: 118,
		name: "Portillos",
		url: "https://www.portillos.com/locations/maplegrove/?utm_source=google&utm_medium=yext&utm_campaign=website",
		"description\r": "\r",
	},
	{
		id: 119,
		name: "Potbelly",
		url: "https://www.potbelly.com/locations/minnesota/maple-grove",
		"description\r": "\r",
	},
	{
		id: 120,
		name: "Punch Pizza",
		url: "https://punchpizza.com/locations/maple-grove/",
		"description\r": "\r",
	},
	{
		id: 121,
		name: "Raising Cane's",
		url: "https://locations.raisingcanes.com/mn/maple-grove/9875-maple-grove-pkwy",
		"description\r": "\r",
	},
	{
		id: 122,
		name: "Redstone Grill",
		url: "https://www.redstonegrill.com/",
		"description\r": "\r",
	},
	{
		id: 123,
		name: "Riviera Maya",
		url: "https://rivieramayamn.com/",
		"description\r": "\r",
	},
	{
		id: 124,
		name: "Rodizio Grill",
		url: "https://www.rodiziogrill.com/maplegrove/",
		"description\r": "\r",
	},
	{
		id: 125,
		name: "Rojo",
		url: "https://rojomexicangrill.com/",
		"description\r": "\r",
	},
	{
		id: 126,
		name: "Rusty Taco",
		url: "https://rustytaco.com/",
		"description\r": "\r",
	},
	{
		id: 127,
		name: "Sawatdee Thai Cuisine",
		url: "https://www.sawatdee.com/maple-grove",
		"description\r": "\r",
	},
	{
		id: 128,
		name: "Shake Shack",
		url: "https://shakeshack.com/location/maple-grove-mn?utm_source=G&utm_medium=local&utm_campaign=google-local#/",
		"description\r": "\r",
	},
	{
		id: 129,
		name: "Starbucks - 70th Wy N",
		url: "https://www.starbucks.com/store-locator/store/1026660/hy-vee-maple-grove-1401-18755-70th-way-north-maple-grove-mn-55311-us",
		"description\r": "\r",
	},
	{
		id: 130,
		name: "Starbucks - Dunkirk Ln N",
		url: "https://www.starbucks.com/store-locator/store/91096/maple-grove-dunkirk-square-9404-dunkirk-lane-maple-grove-mn-553111220-us",
		"description\r": "\r",
	},
	{
		id: 131,
		name: "Starbucks - Elm Creek Blvd",
		url: "https://www.starbucks.com/store-locator/store/1033274/hemlock-elm-creek-pkwy-11850-elm-creek-boulevard-n-maple-grove-mn-55369-u",
		"description\r": "\r",
	},
	{
		id: 132,
		name: "Starbucks - Grove Cir N",
		url: "https://www.starbucks.com/store-locator/store/6527/target-maple-grove-2193-15300-grove-circle-n-maple-grove-mn-553694469-us",
		"description\r": "\r",
	},
	{
		id: 133,
		name: "Starbucks - Wedgewood Ln",
		url: "https://www.starbucks.com/store-locator/store/12142/7979-wedgewood-lane-7979-wedgewood-lane-maple-grove-mn-553699411-us",
		"description\r": "\r",
	},
	{
		id: 134,
		name: "Subway - 63rd Ave N",
		url: "https://restaurants.subway.com/united-states/mn/maple-grove/9660-63rd-ave-n?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=35292&utm_campaign=evergreen-2020",
		"description\r": "\r",
	},
	{
		id: 135,
		name: "Subway - Bass Lake Ctr",
		url: "https://restaurants.subway.com/united-states/mn/maple-grove/12744-bass-lake-rd?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=16428&utm_campaign=evergreen-2020",
		"description\r": "\r",
	},
	{
		id: 136,
		name: "Subway - Dunkirk Ln N",
		url: "https://restaurants.subway.com/united-states/mn/maple-grove/9451-dunkirk-ln-n?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=12949&utm_campaign=evergreen-2020",
		"description\r": "\r",
	},
	{
		id: 137,
		name: "Subway - Grove Village shopping ctr",
		url: "https://restaurants.subway.com/united-states/mn/maple-grove/9869-maple-grove-parkway-north?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=43871&utm_campaign=evergreen-2020",
		"description\r": "\r",
	},
	{
		id: 138,
		name: "Subway - Rice Lake Plaza",
		url: "https://restaurants.subway.com/united-states/mn/maple-grove/13758-83rd-way?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=5063&utm_campaign=evergreen-2020",
		"description\r": "\r",
	},
	{
		id: 139,
		name: "Taco Bell - Grove Dr",
		url: "https://locations.tacobell.com/mn/maple-grove/13910-grove-dr.html?utm_source=yext&utm_campaign=googlelistings&utm_medium=referral&utm_term=004850&utm_content=website&y_source=1_NjE0NjQwMi03MTUtbG9jYXRpb24ud2Vic2l0ZQ3D",
		"description\r": "\r",
	},
	{
		id: 140,
		name: "Taco Bell - Hospital Dr",
		url: "https://locations.tacobell.com/mn/maple-grove/9816-hospital-drive-n-.html?utm_source=yext&utm_campaign=googlelistings&utm_medium=referral&utm_term=036439&utm_content=website&y_source=1_MTk3Nzc3MDMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
		"description\r": "\r",
	},
	{
		id: 141,
		name: "Taco John's",
		url: "https://locations.tacojohns.com/mn/maple-grove/13320-grove-dr/",
		"description\r": "\r",
	},
	{
		id: 142,
		name: "Tandoor",
		url: "https://www.grovetandoor.com/",
		"description\r": "\r",
	},
	{
		id: 143,
		name: "Ten Sushi",
		url: "https://www.tensushimn.com/",
		"description\r": "\r",
	},
	{
		id: 144,
		name: "Teresa's",
		url: "https://teresasmn.com/",
		"description\r": "\r",
	},
	{
		id: 156,
		name: "Test",
		url: "4253 Browndale Ave",
		"description\r": "great spot\r",
	},
	{
		id: 158,
		name: "Test sam",
		url: "3020 Garfield Ave",
		"description\r": "Gfjdjdj\r",
	},
	{
		id: 145,
		name: "TGI Fridays",
		url: "https://locations.tgifridays.com/mn/maple-grove/11830-fountains-way.html",
		"description\r": "\r",
	},
	{
		id: 146,
		name: "Thai Express",
		url: "https://www.thaiexpressfood.com/stores/60398?utm_source=gmb&utm_medium=gmb&utm_campaign=gmb&utm_id=gmb",
		"description\r": "\r",
	},
	{
		id: 147,
		name: "Tono Pizzeria + Cheesesteaks",
		url: "https://tonomn.com/locations/maplegrove/",
		"description\r": "\r",
	},
	{
		id: 148,
		name: "Uffda Donuts",
		url: "https://uffdadonuts.com/",
		"description\r": "\r",
	},
	{
		id: 149,
		name: "Urban Wok",
		url: "https://www.urbanwokusa.com/locations",
		"description\r": "\r",
	},
	{
		id: 150,
		name: "Village Inn",
		url: "https://www.villageinn.com/maplegrove-mn",
		"description\r": "\r",
	},
	{
		id: 151,
		name: "Wendy's",
		url: "https://locations.wendys.com/united-states/mn/maple-grove/13645-83rd-way-n",
		"description\r": "\r",
	},
	{
		id: 152,
		name: "WhirlyBall",
		url: "https://www.whirlyballtwincities.com/",
		"description\r": "\r",
	},
	{
		id: 153,
		name: "White Castle",
		url: "https://www.whitecastle.com/locations/1324",
		"description\r": "\r",
	},
	{
		id: 154,
		name: "Yogurt Lab",
		url: "http://www.yogurtlabs.com/",
		"description\r": "\r",
	},
	{
		id: 155,
		name: "Yu Fong",
		url: "http://doyufong.com/lander",
		"description\r": "",
	},
];
// const CONFIG = {
// 	inputFile: path.join(__dirname, "restaurants-export.csv"),
async function processRestaurants() {
	console.log("🚀 ~ processRestaurants ~ app:", app);
	const schema = z.object({
		name: z.string(),
		url: z.string(),
		description: z.string(),
		physicalAddress: z.string(),
		scrapedDescription: z.string(),
		imageUrl: z.string(),
	});
	const urls = restaurants.map((restaurant) => {
		const url = restaurant.url.trim();
		return `${url}`;
	});
	const batchScrapeJob = await app.asyncBulkScrapeUrls(urls, {
		formats: ["extract"],
		extract: {
			prompt:
				"Extract the name, full, address, image, and description of the restaurant",
			schema,
		},
	});
	console.log(batchScrapeJob);
	const batchScrapeStatus = await app.checkBatchScrapeStatus(batchScrapeJob.id);
	console.log(batchScrapeStatus);
	if (urls.length === 0) {
		console.log("No URLs to process");
		return;
	}
	console.log("🚀 ~ urls ~ urls:", urls);
	const extractedInfo = await app.extract(urls, {
		prompt:
			"Extract the name, full, address, image, and description of the restaurant",
		schema,
		enableWebSearch: true,
	});
	if (!extractedInfo.success) {
		throw new Error(`Failed to scrape: ${extractedInfo.error}`);
	}
	const jobStatus = await app.getExtractStatus(extractedInfo.jobId);
	console.log(jobStatus);
	return jobStatus;
}
processRestaurants();
````

## File: scripts/firecrawl-extractor.js
````javascript
import FirecrawlApp from "@mendable/firecrawl-js";
import { z } from "zod";
import { readFileSync, writeFileSync } from "node:fs";
const restaurantSchema = z
	.object({
		name: z.string().describe("The full name of the restaurant"),
		address: z
			.string()
			.optional()
			.describe("The full address of the restaurant in Maple Grove, Minnesota"),
		imageUrl: z
			.string()
			.optional()
			.describe("URL of the restaurant's logo or main image"),
	})
	.describe("Extract restaurant details from the webpage");
export async function extractWithFirecrawl(url) {
	try {
		console.log(`Extracting data from ${url} using Firecrawl...`);
		const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });
		const scrapeResult = await app.scrapeUrl(url, {
			jsonOptions: {
				extractionSchema: restaurantSchema,
			},
		});
		if (!scrapeResult.success) {
			throw new Error(
				`Firecrawl extraction failed: ${scrapeResult.error || "Unknown error"}`,
			);
		}
		const extractedData = scrapeResult.data?.json;
		return {
			name: extractedData?.name || "",
			address: extractedData?.address || "",
			imageUrl: extractedData?.imageUrl || "",
			sourceUrl: url,
			extractionMethod: "firecrawl",
		};
	} catch (error) {
		console.error(`Error using Firecrawl on ${url}:`, error.message);
		return {
			name: "",
			address: "",
			imageUrl: "",
			sourceUrl: url,
			error: error.message,
			extractionMethod: "firecrawl-failed",
		};
	}
}
export async function batchExtractWithFirecrawl(
	urls,
	apiKey,
	concurrencyLimit = 5,
) {
	const results = [];
	for (let i = 0; i < urls.length; i += concurrencyLimit) {
		const batch = urls.slice(i, i + concurrencyLimit);
		const batchNumber = Math.floor(i / concurrencyLimit) + 1;
		const totalBatches = Math.ceil(urls.length / concurrencyLimit);
		console.log(
			`Processing batch ${batchNumber} of ${totalBatches} with Firecrawl`,
		);
		const batchPromises = batch.map((url) => extractWithFirecrawl(url, apiKey));
		const batchResults = await Promise.all(batchPromises);
		results.push(...batchResults);
		console.log(
			`Completed ${Math.min(i + concurrencyLimit, urls.length)} of ${urls.length} URLs with Firecrawl`,
		);
	}
	return results;
}
if (import.meta.url === import.meta.main) {
	const apiKey = process.env.FIRECRAWL_API_KEY;
	if (!apiKey) {
		console.error("Error: FIRECRAWL_API_KEY environment variable is not set");
		process.exit(1);
	}
	try {
		const restaurantsData = JSON.parse(
			readFileSync("scripts/restaurants.json", "utf8"),
		);
		const urls = restaurantsData.restaurants;
		const results = await batchExtractWithFirecrawl(urls, apiKey);
		const validResults = results.filter(
			(result) => result.name && (result.address || result.imageUrl),
		);
		const outputData = {
			scrapedAt: new Date().toISOString(),
			totalScraped: results.length,
			validResults: validResults.length,
			extractionMethod: "firecrawl",
			restaurants: validResults,
		};
		writeFileSync(
			"firecrawl-restaurant-data.json",
			JSON.stringify(outputData, null, 2),
			"utf8",
		);
		console.log(
			`Firecrawl extraction completed. Found data for ${validResults.length} out of ${urls.length} restaurants.`,
		);
		console.log("Results saved to firecrawl-restaurant-data.json");
	} catch (error) {
		console.error("An error occurred during extraction:", error);
	}
}
````

## File: scripts/hybrid-scraper.js
````javascript
import { readFileSync, writeFileSync } from "node:fs";
import puppeteer from "puppeteer";
import { extractWithFirecrawl } from "./firecrawl-extractor.js";
async function scrapeRestaurantInfo(url, apiKey) {
	console.log(`Scraping: ${url}`);
	try {
		if (apiKey) {
			try {
				console.log(`Attempting extraction with Firecrawl: ${url}`);
				const firecrawlResult = await extractWithFirecrawl(url, apiKey);
				if (
					firecrawlResult.name &&
					(firecrawlResult.address || firecrawlResult.imageUrl)
				) {
					console.log(`✅ Firecrawl extraction successful for: ${url}`);
					return firecrawlResult;
				}
				console.log(
					`⚠️ Firecrawl extraction incomplete for: ${url}, falling back to Puppeteer`,
				);
			} catch (firecrawlError) {
				console.error(
					`🔴 Firecrawl extraction failed: ${firecrawlError.message}`,
				);
				console.log(`Falling back to Puppeteer for: ${url}`);
			}
		}
		const browser = await puppeteer.launch({
			headless: "new",
			args: ["--no-sandbox", "--disable-setuid-sandbox"],
		});
		const page = await browser.newPage();
		await page.setDefaultNavigationTimeout(30000);
		await page.setUserAgent(
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
		);
		await page.goto(url, { waitUntil: "networkidle2" });
		await page.waitForTimeout(2000);
		const data = await page.evaluate((url) => {
			function extractTextFromElements(selectors) {
				for (const selector of selectors) {
					try {
						const elements = document.querySelectorAll(selector);
						for (const element of elements) {
							const text = element.textContent.trim();
							if (text && text.length > 2) {
								return text;
							}
						}
					} catch {
					}
				}
				return "";
			}
			// Helper to find Maple Grove addresses in text
			function findMapleGroveAddress(text) {
				if (!text) return "";
				// Find specific patterns for Maple Grove addresses
				const mapleGroveRegex =
					/\b\d+\s+(?:[A-Za-z0-9\s.,'-])+(?:Maple\s+Grove|MN|Minnesota)(?:[A-Za-z0-9\s.,'-])*\b\d{5}\b/gi;
				const matches = text.match(mapleGroveRegex);
				if (matches && matches.length > 0) {
					return matches[0].trim();
				}
				// Look for partial address patterns
				if (
					text.includes("Maple Grove") ||
					text.includes("MN 55369") ||
					text.includes("MN 55311")
				) {
					const lines = text
						.split("\n")
						.map((line) => line.trim())
						.filter(
							(line) =>
								line.length > 0 &&
								(line.includes("Maple Grove") ||
									/\d{5}/.test(line) ||
									/^\d+\s+[A-Za-z]/.test(line)),
						);
					if (lines.length > 0) {
						return lines.join(", ");
					}
					return text;
				}
				return "";
			}
			// Try to find the restaurant name
			let name = "";
			const possibleNameSelectors = [
				"h1",
				".restaurant-name",
				".location-name",
				".brand-name",
				".store-name",
				".site-title",
				".location h1",
				".location-title",
				"title",
			];
			name = extractTextFromElements(possibleNameSelectors);
			if (name) {
				name = name
					.replace(/ - .*$/, "")
					.replace(/ \| .*$/, "")
					.replace(/Home Page.*$/i, "")
					.replace(/Home$/i, "");
			}
			// Try to find the address in structured elements
			let address = "";
			const possibleAddressSelectors = [
				".address",
				".location-address",
				".restaurant-address",
				"address",
				'[itemprop="address"]',
				".store-address",
				".location-info",
				".contact-info",
				".location-detail",
			];
			address = extractTextFromElements(possibleAddressSelectors);
			if (!address || !findMapleGroveAddress(address)) {
				const textElements = [
					...document.querySelectorAll("p"),
					...document.querySelectorAll("div"),
					...document.querySelectorAll("section"),
				];
				for (const element of textElements) {
					const text = element.textContent.trim();
					const mapleGroveAddress = findMapleGroveAddress(text);
					if (mapleGroveAddress) {
						address = mapleGroveAddress;
						break;
					}
				}
			}
			let imageUrl = "";
			const possibleImageSelectors = [
				".restaurant-image img",
				".location-image img",
				".hero-image img",
				".main-image img",
				".brand-logo",
				".logo img",
				"header img",
				".main-content img",
				".location img",
				'img[width="100"]',
				'img[width="200"]',
				'img[width="300"]',
				'img[width="400"]',
				'img[width="500"]',
				'img[src*="logo"]',
				'img[src*="restaurant"]',
				'img:not([src*="icon"])',
			];
			for (const selector of possibleImageSelectors) {
				const elements = document.querySelectorAll(selector);
				for (const element of elements) {
					if (element.width > 100 || element.height > 100) {
						const src = element.src || element.getAttribute("data-src");
						if (
							src &&
							!src.includes("blank.gif") &&
							!src.includes("placeholder")
						) {
							imageUrl = src;
							break;
						}
					}
				}
				if (imageUrl) break;
			}
			if (imageUrl && !imageUrl.startsWith("http")) {
				const baseUrl = new URL(url);
				imageUrl = new URL(imageUrl, baseUrl.origin).href;
			}
			if (!name) {
				try {
					const urlObj = new URL(url);
					const domain = urlObj.hostname.replace("www.", "");
					// Convert domain to readable name (e.g. pizza-hut.com -> Pizza Hut)
					name = domain
						.split(".")[0] // Get the first part of the domain
						.split("-")
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(" ");
				} catch (e) {
					// If URL parsing fails, use a generic name
					name = "Restaurant";
				}
			}
			return {
				name,
				address,
				imageUrl,
				sourceUrl: url,
			};
		}, url);
		await browser.close();
		return {
			...data,
			extractionMethod: "puppeteer",
		};
	} catch (error) {
		console.error(`Error scraping ${url}:`, error.message);
		return {
			name: "",
			address: "",
			imageUrl: "",
			sourceUrl: url,
			error: error.message,
			extractionMethod: "failed",
		};
	}
}
async function main() {
	try {
		const apiKey = process.env.FIRECRAWL_API_KEY;
		const restaurantsData = JSON.parse(
			readFileSync("scripts/restaurants.json", "utf8"),
		);
		const urls = restaurantsData.restaurants;
		const concurrencyLimit = 5;
		const results = [];
		for (let i = 0; i < urls.length; i += concurrencyLimit) {
			const batch = urls.slice(i, i + concurrencyLimit);
			const batchNumber = Math.floor(i / concurrencyLimit) + 1;
			const totalBatches = Math.ceil(urls.length / concurrencyLimit);
			console.log(`Processing batch ${batchNumber} of ${totalBatches}`);
			const batchPromises = batch.map((url) =>
				scrapeRestaurantInfo(url, apiKey),
			);
			const batchResults = await Promise.all(batchPromises);
			results.push(...batchResults);
			console.log(
				`Completed ${Math.min(i + concurrencyLimit, urls.length)} of ${urls.length} URLs`,
			);
		}
		const validResults = results.filter(
			(result) => result.name && (result.address || result.imageUrl),
		);
		const methodStats = validResults.reduce((acc, curr) => {
			const method = curr.extractionMethod || "unknown";
			acc[method] = (acc[method] || 0) + 1;
			return acc;
		}, {});
		const outputData = {
			scrapedAt: new Date().toISOString(),
			totalScraped: results.length,
			validResults: validResults.length,
			extractionMethodStats: methodStats,
			restaurants: validResults,
		};
		writeFileSync(
			"hybrid-restaurant-data.json",
			JSON.stringify(outputData, null, 2),
			"utf8",
		);
		console.log(
			`Scraping completed. Found data for ${validResults.length} out of ${urls.length} restaurants.`,
		);
		console.log(`Extraction method stats: ${JSON.stringify(methodStats)}`);
		console.log("Results saved to hybrid-restaurant-data.json");
	} catch (error) {
		console.error("An error occurred during scraping:", error);
	}
}
main();
````

## File: scripts/scrape-restaurants.js
````javascript
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer";
async function scrapeRestaurantInfo(url) {
	console.log(`Scraping: ${url}`);
	try {
		const browser = await puppeteer.launch({
			headless: "new",
			args: ["--no-sandbox", "--disable-setuid-sandbox"],
		});
		const page = await browser.newPage();
		await page.setDefaultNavigationTimeout(30000);
		await page.setUserAgent(
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
		);
		await page.goto(url, { waitUntil: "networkidle2" });
		await page.waitForTimeout(2000);
		const data = await page.evaluate((url) => {
			function extractTextFromElements(selectors) {
				for (const selector of selectors) {
					try {
						const elements = document.querySelectorAll(selector);
						for (const element of elements) {
							const text = element.textContent.trim();
							if (text && text.length > 2) {
								return text;
							}
						}
					} catch {
					}
				}
				return "";
			}
			// Helper to find Maple Grove addresses in text
			function findMapleGroveAddress(text) {
				if (!text) return "";
				// Find specific patterns for Maple Grove addresses
				const mapleGroveRegex =
					/\b\d+\s+(?:[A-Za-z0-9\s.,'-])+(?:Maple\s+Grove|MN|Minnesota)(?:[A-Za-z0-9\s.,'-])*\b\d{5}\b/gi;
				const matches = text.match(mapleGroveRegex);
				if (matches && matches.length > 0) {
					return matches[0].trim();
				}
				// Look for partial address patterns
				if (
					text.includes("Maple Grove") ||
					text.includes("MN 55369") ||
					text.includes("MN 55311")
				) {
					const lines = text
						.split("\n")
						.map((line) => line.trim())
						.filter(
							(line) =>
								line.length > 0 &&
								(line.includes("Maple Grove") ||
									/\d{5}/.test(line) ||
									/^\d+\s+[A-Za-z]/.test(line)),
						);
					if (lines.length > 0) {
						return lines.join(", ");
					}
					return text;
				}
				return "";
			}
			// Try to find the restaurant name
			let name = "";
			const possibleNameSelectors = [
				"h1",
				".restaurant-name",
				".location-name",
				".brand-name",
				".store-name",
				".site-title",
				".location h1",
				".location-title",
				"title",
			];
			name = extractTextFromElements(possibleNameSelectors);
			if (name) {
				name = name
					.replace(/ - .*$/, "")
					.replace(/ \| .*$/, "")
					.replace(/Home Page.*$/i, "")
					.replace(/Home$/i, "");
			}
			// Try to find the address in structured elements
			let address = "";
			const possibleAddressSelectors = [
				".address",
				".location-address",
				".restaurant-address",
				"address",
				'[itemprop="address"]',
				".store-address",
				".location-info",
				".contact-info",
				".location-detail",
			];
			address = extractTextFromElements(possibleAddressSelectors);
			if (!address || !findMapleGroveAddress(address)) {
				const textElements = [
					...document.querySelectorAll("p"),
					...document.querySelectorAll("div"),
					...document.querySelectorAll("section"),
				];
				for (const element of textElements) {
					const text = element.textContent.trim();
					const mapleGroveAddress = findMapleGroveAddress(text);
					if (mapleGroveAddress) {
						address = mapleGroveAddress;
						break;
					}
				}
			}
			let imageUrl = "";
			const possibleImageSelectors = [
				".restaurant-image img",
				".location-image img",
				".hero-image img",
				".main-image img",
				".brand-logo",
				".logo img",
				"header img",
				".main-content img",
				".location img",
				'img[width="100"]',
				'img[width="200"]',
				'img[width="300"]',
				'img[width="400"]',
				'img[width="500"]',
				'img[src*="logo"]',
				'img[src*="restaurant"]',
				'img:not([src*="icon"])',
			];
			for (const selector of possibleImageSelectors) {
				const elements = document.querySelectorAll(selector);
				for (const element of elements) {
					if (element.width > 100 || element.height > 100) {
						const src = element.src || element.getAttribute("data-src");
						if (
							src &&
							!src.includes("blank.gif") &&
							!src.includes("placeholder")
						) {
							imageUrl = src;
							break;
						}
					}
				}
				if (imageUrl) break;
			}
			if (imageUrl && !imageUrl.startsWith("http")) {
				const baseUrl = new URL(url);
				imageUrl = new URL(imageUrl, baseUrl.origin).href;
			}
			if (!name) {
				try {
					const urlObj = new URL(url);
					const domain = urlObj.hostname.replace("www.", "");
					// Convert domain to readable name (e.g. pizza-hut.com -> Pizza Hut)
					name = domain
						.split(".")[0] // Get the first part of the domain
						.split("-")
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(" ");
				} catch (e) {
					// If URL parsing fails, use a generic name
					name = "Restaurant";
				}
			}
			return {
				name,
				address,
				imageUrl,
				sourceUrl: url,
			};
		}, url);
		await browser.close();
		return data;
	} catch (error) {
		console.error(`Error scraping ${url}:`, error.message);
		return {
			name: "",
			address: "",
			imageUrl: "",
			sourceUrl: url,
			error: error.message,
		};
	}
}
// Main function to run the scraper
async function main() {
	try {
		// Read the JSON file with restaurant URLs
		const restaurantsData = JSON.parse(
			readFileSync("scripts/restaurants.json", "utf8"),
		);
		const urls = restaurantsData.restaurants;
		const concurrencyLimit = 5;
		const results = [];
		for (let i = 0; i < urls.length; i += concurrencyLimit) {
			const batch = urls.slice(i, i + concurrencyLimit);
			const batchNumber = Math.floor(i / concurrencyLimit) + 1;
			const totalBatches = Math.ceil(urls.length / concurrencyLimit);
			console.log(`Processing batch ${batchNumber} of ${totalBatches}`);
			const batchPromises = batch.map((url) => scrapeRestaurantInfo(url));
			const batchResults = await Promise.all(batchPromises);
			results.push(...batchResults);
			console.log(
				`Completed ${Math.min(i + concurrencyLimit, urls.length)} of ${urls.length} URLs`,
			);
		}
		const validResults = results.filter(
			(result) => result.name && (result.address || result.imageUrl),
		);
		const outputData = {
			scrapedAt: new Date().toISOString(),
			totalScraped: results.length,
			validResults: validResults.length,
			restaurants: validResults,
		};
		writeFileSync(
			"restaurant-data.json",
			JSON.stringify(outputData, null, 2),
			"utf8",
		);
		console.log(
			`Scraping completed. Found data for ${validResults.length} out of ${urls.length} restaurants.`,
		);
		console.log("Results saved to restaurant-data.json");
	} catch (error) {
		console.error("An error occurred during scraping:", error);
	}
}
main();
````

## File: src/actions/deals.ts
````typescript
"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { restaurantDeals } from "@/db/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";
type ActionResult = {
	success: boolean;
	message: string;
	error?: Record<string, string[]>;
};
export async function importDealsFromCSV(
	dealsData: Record<string, unknown>[],
): Promise<ActionResult> {
	try {
		const DealSchema = z.object({
			title: z.string().min(1, "Title is required"),
			content: z.string().min(1, "Content is required"),
			restaurantId: z
				.string()
				.or(z.number())
				.transform((val) =>
					typeof val === "string" ? BigInt(val) : BigInt(val),
				),
			active: z.union([
				z.boolean(),
				z
					.string()
					.transform((val) => val.toLowerCase() === "true" || val === "1"),
			]),
			imageUrl: z.string().optional().nullable(),
		});
		const validatedDeals = dealsData.map((deal) => {
			try {
				const validated = DealSchema.parse(deal);
				return {
					title: validated.title,
					content: validated.content,
					restaurantId: validated.restaurantId,
					active: validated.active,
					imageUrl: validated.imageUrl || "",
					// Format dates as ISO strings for drizzle
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
				};
			} catch (error) {
				// If validation fails, throw with details
				if (error instanceof z.ZodError) {
					throw new Error(
						`Invalid deal data: ${error.errors.map((e) => e.message).join(", ")}`,
					);
				}
				throw error;
			}
		});
		// Insert all deals into the database
		await db.insert(restaurantDeals).values(validatedDeals);
		// Revalidate the deals page to show the new data
		revalidatePath("/admin/deals");
		return {
			success: true,
			message: `Successfully imported ${validatedDeals.length} deals.`,
		};
	} catch (error) {
		console.error("Error importing deals:", error);
		return {
			success: false,
			message: "Failed to import deals.",
			error: {
				_form: [(error as Error).message || "Unknown error occurred."],
			},
		};
	}
}
export async function updateDealAction(
	id: bigint | number,
	data: Partial<typeof restaurantDeals.$inferInsert>,
): Promise<ActionResult> {
	try {
		await db
			.update(restaurantDeals)
			.set({
				...data,
				updatedAt: new Date().toISOString(),
			})
			.where(eq(restaurantDeals.id, BigInt(id)));
		revalidatePath("/admin/deals");
		return {
			success: true,
			message: "Deal updated successfully!",
		};
	} catch (error) {
		console.error("Error updating deal:", error);
		return {
			success: false,
			message: "Failed to update deal.",
			error: {
				_form: [(error as Error).message || "Unknown error occurred."],
			},
		};
	}
}
````

## File: src/app/(public)/sign-in/[[...sign-in]]/page.tsx
````typescript
import { SignIn } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn />
    </div>
  );
}
````

## File: src/app/(public)/sign-up/[[...sign-up]]/page.tsx
````typescript
import { SignUp } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUp />
    </div>
  );
}
````

## File: src/app/admin/deals/new/page.tsx
````typescript
import { NewDealForm } from "@/components/admin/deals/new-deal-form";
export const metadata = {
	title: "Admin - Add New Deal",
	description: "Create a new restaurant deal or offer",
};
export default function NewDealPage() {
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-2xl font-bold tracking-tight">Add New Deal</h2>
				<p className="text-muted-foreground">
					Create a new deal or special offer for a restaurant
				</p>
			</div>
			<div className="bg-white rounded-lg shadow-sm p-6">
				<NewDealForm />
			</div>
		</div>
	);
}
````

## File: src/app/admin/deals/page.tsx
````typescript
import { DealFilters } from "@/components/admin/deals/deal-filters";
import { DealsTable } from "@/components/admin/deals/deals-table";
import { getDeals, getRestaurants } from "@/db/models/restaurants/restaurants";
export const metadata = {
	title: "Admin - Deals Management",
	description: "Manage restaurant deals and offers",
};
export default async function DealsAdminPage() {
	const deals = await getDeals();
	console.log("🚀 ~ DealsAdminPage ~ deals:", deals);
	const restaurants = await getRestaurants();
	console.log("🚀 ~ DealsAdminPage ~ restaurants:", restaurants);
	return (
		<div className="space-y-6">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div>
					<h2 className="text-2xl font-bold tracking-tight">
						Deals Management
					</h2>
					<p className="text-muted-foreground">
						View and manage special deals and offers for restaurants
					</p>
				</div>
				<div className="flex items-center gap-2">
					<a
						href="/admin/deals/new"
						className="inline-flex h-10 items-center justify-center rounded-md bg-[#818cf8] px-4 py-2 text-sm font-medium text-white hover:bg-[#6366f1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					>
						Add New Deal
					</a>
				</div>
			</div>
			{deals.length > 0 && (
				<>
					<DealFilters restaurants={restaurants} deals={deals} />
					<DealsTable deals={deals} />
				</>
			)}
		</div>
	);
}
````

## File: src/app/admin/restaurants/bulk-qr/page.tsx
````typescript
import { getRestaurants } from "@/db/models";
import { BulkQRPage } from "../bulk-qr";
import type { Restaurant } from "@/types/db";
export default async function BulkQRCodePage() {
	const restaurantsData = await getRestaurants();
	const restaurants = restaurantsData.map((restaurant) => {
		const safeRestaurant: Restaurant = {
			id: restaurant.id,
			name: restaurant.name || "Unknown Restaurant",
			description: restaurant.description || "No description available",
			imageUrl: restaurant.imageUrl || "/placeholder.jpg",
			address: restaurant.address || "No address provided",
			qrCodeUrl: restaurant.qrCodeUrl || null,
		};
		return safeRestaurant;
	});
	return <BulkQRPage restaurants={restaurants} />;
}
````

## File: src/app/admin/restaurants/bulk-qr-code-manager.tsx
````typescript
"use client";
import { useState, useRef, useEffect } from "react";
import { useHandleQRCode } from "@/hooks/use-handle-qr-code";
import type { Restaurant } from "@/types/db";
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogTitle,
	DialogHeader,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	AlertCircle,
	CheckCircle2,
	Download,
	QrCode,
	RefreshCw,
	Save,
	X,
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
interface BulkQRCodeManagerProps {
	restaurants: Restaurant[];
}
export function BulkQRCodeManager({ restaurants }: BulkQRCodeManagerProps) {
	const [open, setOpen] = useState(false);
	const {
		selectedRestaurants = [],
		generating,
		saving,
		success,
		error,
		progress = 0,
		results = [],
		toggleSelectAll = () => {},
		toggleRestaurant = () => {},
		handleGenerateAll = async () => {},
		handleSaveAll = async () => {},
		handleDownloadAll = async () => {},
		handleReset = () => {},
	} = useHandleQRCode({ restaurants, mode: "bulk" });
	const allSelected =
		restaurants.length > 0 && selectedRestaurants.length === restaurants.length;
	const someSelected =
		selectedRestaurants.length > 0 &&
		selectedRestaurants.length < restaurants.length;
	const restaurantsWithoutQR = restaurants.filter((r) => !r.qrCodeUrl);
	const hasRestaurantsWithoutQR = restaurantsWithoutQR.length > 0;
	const checkboxRef = useRef<HTMLButtonElement>(null);
	useEffect(() => {
		if (checkboxRef.current && someSelected) {
			const element = checkboxRef.current as unknown as HTMLInputElement;
			element.indeterminate = true;
		}
	}, [someSelected]);
	const handleOpenChange = (newOpen: boolean) => {
		if (!newOpen && !generating && !saving) {
			handleReset();
		}
		setOpen(newOpen);
	};
	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				<Button className="ml-auto flex items-center gap-2">
					<QrCode className="h-4 w-4" />
					<span>Bulk QR Code Manager</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-3xl p-6">
				<DialogHeader>
					<DialogTitle>Bulk QR Code Manager</DialogTitle>
					<DialogDescription>
						Generate, save, and download QR codes for multiple restaurants at
						once
					</DialogDescription>
				</DialogHeader>
				{error && (
					<Alert variant="destructive" className="mb-4">
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>Error</AlertTitle>
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				)}
				{success && (
					<Alert className="mb-4 bg-green-50 border-green-200 text-green-700">
						<CheckCircle2 className="h-4 w-4" />
						<AlertTitle>Success</AlertTitle>
						<AlertDescription>
							QR codes have been saved successfully!
						</AlertDescription>
					</Alert>
				)}
				{hasRestaurantsWithoutQR && !generating && !success && (
					<Alert className="mb-4 bg-amber-50 border-amber-200 text-amber-700">
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>Notice</AlertTitle>
						<AlertDescription>
							{restaurantsWithoutQR.length} restaurant
							{restaurantsWithoutQR.length > 1 ? "s" : ""}{" "}
							{restaurantsWithoutQR.length > 1 ? "do" : "does"} not have QR
							codes. They will be created during the bulk operation.
						</AlertDescription>
					</Alert>
				)}
				{generating && progress > 0 && (
					<div className="mb-4 space-y-2">
						<div className="flex justify-between text-sm text-gray-500">
							<span>Generating QR codes...</span>
							<span>{progress}%</span>
						</div>
						<Progress value={progress} className="h-2" />
					</div>
				)}
				<div className="mb-4 flex items-center">
					<Checkbox
						id="select-all"
						ref={checkboxRef}
						checked={allSelected}
						onCheckedChange={(checked) =>
							toggleSelectAll(restaurants, checked === true)
						}
						disabled={generating || saving}
						className="mr-2"
					/>
					<label htmlFor="select-all" className="text-sm font-medium">
						{allSelected ? "Deselect all" : "Select all"} ({restaurants.length})
					</label>
					<div className="ml-auto space-x-2">
						{!generating && !success && (
							<Button
								onClick={() => handleGenerateAll()}
								disabled={selectedRestaurants.length === 0 || generating}
								className="text-xs h-8"
							>
								<QrCode className="h-3.5 w-3.5 mr-1" />
								Generate QR Codes
							</Button>
						)}
						{generating && !success && (
							<Button
								onClick={handleSaveAll}
								disabled={results.length === 0 || saving}
								className="text-xs h-8"
							>
								<Save className="h-3.5 w-3.5 mr-1" />
								{saving ? "Saving..." : "Save QR Codes"}
							</Button>
						)}
						{success && (
							<>
								<Button
									onClick={handleDownloadAll}
									variant="secondary"
									className="text-xs h-8"
								>
									<Download className="h-3.5 w-3.5 mr-1" />
									Download All
								</Button>
								<Button
									onClick={handleReset}
									variant="outline"
									className="text-xs h-8"
								>
									<RefreshCw className="h-3.5 w-3.5 mr-1" />
									Start New Batch
								</Button>
							</>
						)}
					</div>
				</div>
				<div className="rounded border max-h-[400px] overflow-y-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-10" />
								<TableHead>Restaurant</TableHead>
								<TableHead>Current Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{restaurants.map((restaurant) => {
								const isSelected = selectedRestaurants.some(
									(r) => r.id === restaurant.id,
								);
								const resultItem = results.find(
									(r) => r.restaurantId === restaurant.id.toString(),
								);
								return (
									<TableRow key={restaurant.id.toString()}>
										<TableCell className="p-2">
											<Checkbox
												checked={isSelected}
												onCheckedChange={(value) =>
													toggleRestaurant(restaurant)
												}
												disabled={generating || saving}
											/>
										</TableCell>
										<TableCell className="py-2">
											<div className="font-medium">{restaurant.name}</div>
											<div className="text-xs text-gray-500 truncate max-w-[300px]">
												{restaurant.address}
											</div>
										</TableCell>
										<TableCell className="py-2">
											{resultItem ? (
												<div className="flex items-center">
													{resultItem.success ? (
														<>
															<CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
															<span className="text-sm">Success</span>
														</>
													) : (
														<>
															<X className="h-4 w-4 text-red-500 mr-2" />
															<span className="text-sm">Failed</span>
														</>
													)}
												</div>
											) : (
												<div className="flex items-center">
													{restaurant.qrCodeUrl ? (
														<div className="flex items-center gap-2">
															<div className="relative w-8 h-8 shrink-0">
																<Image
																	src={restaurant.qrCodeUrl}
																	alt="QR"
																	fill
																	className="object-contain"
																	sizes="32px"
																/>
															</div>
															<span className="text-xs">Exists</span>
														</div>
													) : (
														<span className="text-xs text-gray-500">
															No QR code
														</span>
													)}
												</div>
											)}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
				<DialogFooter className="mt-4">
					{!generating && !success && (
						<Button variant="outline" onClick={() => setOpen(false)}>
							Cancel
						</Button>
					)}
					{generating && !success && (
						<Button variant="outline" onClick={handleReset} disabled={saving}>
							<X className="h-4 w-4 mr-1" />
							Cancel
						</Button>
					)}
					{success && (
						<Button variant="outline" onClick={() => setOpen(false)}>
							Close
						</Button>
					)}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
````

## File: src/app/admin/restaurants/bulk-qr.tsx
````typescript
"use client";
import { useState, useEffect } from "react";
import { useHandleQRCode } from "@/hooks/use-handle-qr-code";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import {
	Check,
	X,
	QrCode,
	RefreshCw,
	Download,
	Save,
	ChevronLeft,
} from "lucide-react";
import type { Restaurant } from "@/types/db";
export function BulkQRPage({ restaurants }: { restaurants: Restaurant[] }) {
	const {
		selectedRestaurants = [],
		generating,
		saving,
		success,
		error,
		progress = 0,
		results = [],
		toggleSelectAll = () => {},
		toggleRestaurant = () => {},
		handleGenerateAll = async () => {},
		handleSaveAll = async () => {},
		handleDownloadAll = async () => {},
		handleReset = () => {},
	} = useHandleQRCode({ restaurants, mode: "bulk" });
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	const allSelected =
		restaurants.length > 0 && selectedRestaurants.length === restaurants.length;
	const someSelected =
		selectedRestaurants.length > 0 &&
		selectedRestaurants.length < restaurants.length;
	if (!isClient) {
		return <div>Loading...</div>;
	}
	return (
		<div className="container py-8 space-y-6">
			<div className="flex items-center">
				<Link
					href="/admin/restaurants"
					className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mr-4"
				>
					<ChevronLeft className="h-4 w-4 mr-1" />
					Back to Restaurants
				</Link>
				<h1 className="text-2xl font-bold">Bulk QR Code Generator</h1>
			</div>
			<div className="bg-white border rounded-lg p-6 shadow-sm">
				<div className="mb-6">
					<h2 className="text-xl font-semibold mb-2">Select Restaurants</h2>
					<p className="text-gray-500">
						Choose the restaurants you want to generate QR codes for. You can
						select all restaurants or pick specific ones from the list.
					</p>
				</div>
				{error && (
					<div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
						<div className="flex items-center">
							<X className="h-5 w-5 mr-2 text-red-500" />
							<p>{error}</p>
						</div>
					</div>
				)}
				{success && (
					<div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
						<div className="flex items-center">
							<Check className="h-5 w-5 mr-2 text-green-500" />
							<p>
								QR codes have been generated successfully for{" "}
								{results.filter((r) => r.success).length} restaurants!
							</p>
						</div>
					</div>
				)}
				{}
				<div className="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-md">
					<div className="flex items-center">
						<Checkbox
							id="select-all"
							checked={allSelected}
							onCheckedChange={(checked) =>
								toggleSelectAll(restaurants, checked === true)
							}
							disabled={generating || saving}
							className="mr-2"
						/>
						<label htmlFor="select-all" className="text-sm font-medium">
							{allSelected ? "Deselect All" : "Select All"} (
							{restaurants.length} restaurants)
						</label>
					</div>
					<div className="space-x-2">
						{!generating && !success && (
							<Button
								onClick={() => handleGenerateAll()}
								disabled={selectedRestaurants.length === 0 || generating}
							>
								<QrCode className="h-4 w-4 mr-2" />
								Generate QR Codes
							</Button>
						)}
						{generating && !success && (
							<Button
								onClick={handleSaveAll}
								disabled={results.length === 0 || saving}
							>
								<Save className="h-4 w-4 mr-2" />
								{saving ? "Saving..." : "Save QR Codes"}
							</Button>
						)}
						{success && (
							<>
								<Button onClick={handleDownloadAll} variant="outline">
									<Download className="h-4 w-4 mr-2" />
									Download All
								</Button>
								<Button onClick={handleReset} variant="outline">
									<RefreshCw className="h-4 w-4 mr-2" />
									Generate New Batch
								</Button>
							</>
						)}
					</div>
				</div>
				{}
				{generating && progress > 0 && (
					<div className="mb-6 space-y-2">
						<div className="flex justify-between text-sm text-gray-500">
							<span>Generating QR codes...</span>
							<span>{progress}%</span>
						</div>
						<Progress value={progress} className="h-2" />
					</div>
				)}
				{}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{restaurants.map((restaurant) => {
						const isSelected = selectedRestaurants.some(
							(r) => r.id === restaurant.id,
						);
						const resultItem = results.find(
							(r) => r.restaurantId === restaurant.id.toString(),
						);
						return (
							<div
								key={restaurant.id.toString()}
								className={`border rounded-lg p-4 ${isSelected ? "bg-blue-50 border-blue-200" : ""}`}
							>
								<div className="flex items-start">
									<div className="flex items-center h-5 mt-1">
										<Checkbox
											checked={isSelected}
											onCheckedChange={(checked) =>
												toggleRestaurant(restaurant)
											}
											disabled={generating || saving}
											aria-label={`Select ${restaurant.name}`}
										/>
									</div>
									<div className="ml-3 flex-1">
										<h3 className="text-base font-semibold">
											{restaurant.name}
										</h3>
										<p className="text-sm text-gray-500 line-clamp-2">
											{restaurant.address}
										</p>
										{}
										<div className="mt-2">
											{resultItem ? (
												resultItem.success ? (
													<Badge className="bg-green-100 text-green-800 border-green-200">
														<Check className="h-3 w-3 mr-1" />
														Generated
													</Badge>
												) : (
													<Badge
														variant="destructive"
														className="bg-red-100 text-red-800 border-red-200"
													>
														<X className="h-3 w-3 mr-1" />
														Failed
													</Badge>
												)
											) : (
												<div className="flex items-center text-sm text-gray-500">
													{restaurant.qrCodeUrl ? (
														<div className="flex items-center gap-2">
															<div className="relative w-8 h-8">
																<Image
																	src={restaurant.qrCodeUrl}
																	alt={`QR code for ${restaurant.name}`}
																	fill
																	className="object-contain"
																	sizes="32px"
																/>
															</div>
															<span className="text-xs">Has QR Code</span>
														</div>
													) : (
														<span className="text-xs">No QR Code</span>
													)}
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
````

## File: src/app/admin/restaurants/dummy-components.tsx
````typescript
"use client";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import type { Restaurant } from "@/types/db";
export function PageHeader({
	heading,
	subheading,
}: { heading: string; subheading: string }) {
	return (
		<div className="space-y-1">
			<h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
			<p className="text-muted-foreground">{subheading}</p>
		</div>
	);
}
export function AddRestaurantDialog({ children }: { children: ReactNode }) {
	return <div>{children}</div>;
}
export function RestaurantsList({
	restaurants,
}: { restaurants: Restaurant[] }) {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{restaurants.map((restaurant) => (
				<div
					key={restaurant.id.toString()}
					className="rounded-lg border bg-card text-card-foreground shadow"
				>
					<div className="p-6 space-y-2">
						<h3 className="text-lg font-medium">{restaurant.name}</h3>
						<p className="text-sm text-muted-foreground">
							{restaurant.address}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
````

## File: src/app/admin/restaurants/index.tsx
````typescript
import { getRestaurants } from "@/db/models/restaurants";
import { PageHeader } from "./dummy-components";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { AddRestaurantDialog } from "./dummy-components";
import { SelectableRestaurantsTable } from "./selectable-restaurants-table";
import type { Restaurant } from "@/types/db";
export default async function RestaurantsPage() {
	const restaurantsData = await getRestaurants();
	const restaurants = restaurantsData.map((restaurant) => {
		const processedData = {
			id: restaurant.id,
			name: restaurant.name || "Unknown Restaurant",
			description: restaurant.description || "No description available",
			imageUrl: restaurant.imageUrl || "/placeholder.jpg",
			address: restaurant.address || "No address provided",
			qrCodeUrl: restaurant.qrCodeUrl || null,
			deals: [],
			prizes: [],
			punchCards: [],
			punchCardCount: restaurant.punchCardCount || 0,
			dealCount: restaurant.dealCount || 0,
			prizeCount: restaurant.prizeCount || 0,
		};
		return processedData as unknown as Restaurant;
	});
	return (
		<div className="container py-6 space-y-6">
			<div className="flex items-center justify-between">
				<PageHeader
					heading="Restaurants"
					subheading="Manage all participating restaurants"
				/>
				<AddRestaurantDialog>
					<Button className="flex items-center gap-2">
						<PlusCircle className="h-4 w-4" />
						<span>Add Restaurant</span>
					</Button>
				</AddRestaurantDialog>
			</div>
			<SelectableRestaurantsTable restaurants={restaurants} />
		</div>
	);
}
````

## File: src/app/admin/restaurants/selectable-restaurants-table.tsx
````typescript
"use client";
import { useState } from "react";
import { useHandleBulkQRCode } from "@/hooks/use-handle-bulk-qr-code";
import type { Restaurant } from "@/types/db";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { QRCodeManager } from "./qr-code-manager";
import {
	AlertCircle,
	CheckCircle2,
	Download,
	QrCode,
	Save,
	X,
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import Link from "next/link";
interface SelectableRestaurantsTableProps {
	restaurants: Restaurant[];
}
export function SelectableRestaurantsTable({
	restaurants,
}: SelectableRestaurantsTableProps) {
	const {
		selectedRestaurants,
		generating,
		saving,
		success,
		error,
		progress,
		results,
		toggleSelectAll,
		toggleRestaurant,
		handleGenerateAll,
		handleSaveAll,
		handleDownloadAll,
		handleReset,
	} = useHandleBulkQRCode();
	const allSelected =
		restaurants.length > 0 && selectedRestaurants.length === restaurants.length;
	const someSelected =
		selectedRestaurants.length > 0 &&
		selectedRestaurants.length < restaurants.length;
	const hasSelection = selectedRestaurants.length > 0;
	return (
		<div className="space-y-4">
			{}
			{hasSelection && (
				<div className="flex items-center justify-between p-2 border rounded-md bg-slate-50">
					<div className="flex items-center gap-1.5">
						<span className="text-sm font-medium">
							{selectedRestaurants.length} restaurant
							{selectedRestaurants.length !== 1 ? "s" : ""} selected
						</span>
					</div>
					<div className="flex items-center gap-2">
						{!generating && !success && (
							<Button
								size="sm"
								onClick={handleGenerateAll}
								disabled={generating}
								className="h-8"
							>
								<QrCode className="h-3.5 w-3.5 mr-1.5" />
								Generate QR Codes
							</Button>
						)}
						{generating && !success && (
							<Button
								size="sm"
								onClick={handleSaveAll}
								disabled={!results.length || saving}
								className="h-8"
							>
								<Save className="h-3.5 w-3.5 mr-1.5" />
								{saving ? "Saving..." : "Save QR Codes"}
							</Button>
						)}
						{success && (
							<>
								<Button
									size="sm"
									onClick={handleDownloadAll}
									variant="outline"
									className="h-8"
								>
									<Download className="h-3.5 w-3.5 mr-1.5" />
									Download All
								</Button>
								<Button
									size="sm"
									variant="ghost"
									onClick={handleReset}
									className="h-8"
								>
									Reset
								</Button>
							</>
						)}
					</div>
				</div>
			)}
			{}
			{error && (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
			{success && (
				<Alert className="bg-green-50 border-green-200 text-green-700">
					<CheckCircle2 className="h-4 w-4" />
					<AlertTitle>Success</AlertTitle>
					<AlertDescription>
						QR codes have been saved successfully for{" "}
						{results.filter((r) => r.success).length} restaurants!
					</AlertDescription>
				</Alert>
			)}
			{}
			{generating && progress > 0 && (
				<div className="space-y-2">
					<div className="flex justify-between text-sm">
						<span>Generating QR codes...</span>
						<span>{progress}%</span>
					</div>
					<Progress value={progress} className="h-2" />
				</div>
			)}
			{}
			<div className="border rounded-md">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-12">
								<Checkbox
									checked={allSelected}
									data-state={someSelected ? "indeterminate" : undefined}
									onCheckedChange={(checked) =>
										toggleSelectAll(restaurants, !!checked)
									}
									disabled={generating || saving}
									aria-label="Select all restaurants"
								/>
							</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Address</TableHead>
							<TableHead>QR Code</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{restaurants.map((restaurant) => {
							const isSelected = selectedRestaurants.some(
								(r) => r.id === restaurant.id,
							);
							const resultItem = results.find(
								(r) => r.restaurantId === restaurant.id.toString(),
							);
							return (
								<TableRow key={restaurant.id.toString()}>
									<TableCell className="p-2">
										<Checkbox
											checked={isSelected}
											onCheckedChange={() => toggleRestaurant(restaurant)}
											disabled={generating || saving}
											aria-label={`Select ${restaurant.name}`}
										/>
									</TableCell>
									<TableCell>
										<div className="font-medium">{restaurant.name}</div>
										{"dealCount" in restaurant &&
											typeof restaurant.dealCount === "number" &&
											restaurant.dealCount > 0 && (
												<Badge variant="outline" className="mt-1 text-xs">
													{restaurant.dealCount} deals
												</Badge>
											)}
									</TableCell>
									<TableCell>
										<div className="text-sm text-muted-foreground">
											{restaurant.address}
										</div>
									</TableCell>
									<TableCell>
										{resultItem ? (
											<div className="flex items-center">
												{resultItem.success ? (
													<Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
														<CheckCircle2 className="h-3 w-3 mr-1" />
														Generated
													</Badge>
												) : (
													<Badge
														variant="destructive"
														className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200"
													>
														<X className="h-3 w-3 mr-1" />
														Failed
													</Badge>
												)}
											</div>
										) : (
											<div className="flex items-center">
												{restaurant.qrCodeUrl ? (
													<div className="relative w-8 h-8">
														<Image
															src={restaurant.qrCodeUrl}
															alt="QR"
															fill
															className="object-contain"
															sizes="32px"
														/>
													</div>
												) : (
													<Badge
														variant="outline"
														className="text-muted-foreground"
													>
														No QR
													</Badge>
												)}
											</div>
										)}
									</TableCell>
									<TableCell className="text-right">
										<div className="flex justify-end gap-2">
											<QRCodeManager restaurant={restaurant} variant="table" />
											<Button
												variant="ghost"
												size="sm"
												asChild
												className="px-2 h-8"
											>
												<Link href={`/admin/restaurants/${restaurant.id}`}>
													View
												</Link>
											</Button>
										</div>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
````

## File: src/app/api/restaurants/[id]/route.ts
````typescript
import { type NextRequest, NextResponse } from "next/server";
import { updateRestaurant } from "@/db/models/restaurants/restaurants";
import { z } from "zod";
const updateRestaurantSchema = z.object({
	name: z.string().min(1, "Name is required"),
	description: z.string().min(1, "Description is required"),
	address: z.string().min(1, "Address is required"),
	imageUrl: z.string().url("Image URL must be a valid URL"),
});
export async function PUT(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	try {
		const id = params.id;
		if (!id) {
			return NextResponse.json(
				{ error: "Restaurant ID is required" },
				{ status: 400 },
			);
		}
		const body = await req.json();
		const validationResult = updateRestaurantSchema.safeParse(body);
		if (!validationResult.success) {
			return NextResponse.json(
				{ error: validationResult.error.errors },
				{ status: 400 },
			);
		}
		const updatedRestaurant = await updateRestaurant(
			BigInt(id),
			validationResult.data,
		);
		return NextResponse.json({
			message: "Restaurant updated successfully",
			restaurant: updatedRestaurant[0],
		});
	} catch (error) {
		console.error("Error updating restaurant:", error);
		return NextResponse.json(
			{ error: "An error occurred while updating the restaurant" },
			{ status: 500 },
		);
	}
}
export async function GET(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } },
) {
	return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
````

## File: src/app/api/sse/route.ts
````typescript
import type { NextRequest } from "next/server";
const clients = new Set<ReadableStreamDefaultController>();
export const runtime = "edge";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
	console.log("🚀 ~ GET ~ request:", request);
	const responseStream = new ReadableStream({
		async start(controller) {
			clients.add(controller);
			const initialMessage = {
				type: "connection_established",
				payload: {
					message: "SSE connection established",
					timestamp: new Date().toISOString(),
				},
			};
			controller.enqueue(encodeSSE("message", JSON.stringify(initialMessage)));
			request.signal.addEventListener("abort", () => {
				clients.delete(controller);
			});
		},
	});
	return new Response(responseStream, {
		headers: {
			"Content-Type": "text/event-stream",
			"Cache-Control": "no-cache",
			Connection: "keep-alive",
		},
	});
}
export async function POST(request: NextRequest) {
	console.log("🚀 ~ POST ~ request:", request);
	try {
		const body = await request.json();
		console.log("🚀 ~ POST ~ body:", body);
		if (!body.type || !body.payload) {
			return Response.json({ error: "Invalid request body" }, { status: 400 });
		}
		if (body.type === "validate_qr") {
			const { userId, restaurantId, punchCardId } = body.payload;
			if (!userId || !restaurantId || !punchCardId) {
				return Response.json(
					{ error: "Missing required fields" },
					{ status: 400 },
				);
			}
			const isValid = true;
			const responseMessage = {
				type: "validation_result",
				payload: {
					success: isValid,
					message: isValid
						? "Punch added successfully!"
						: "Failed to validate QR code",
					punchCardId,
					userId,
					restaurantId,
					timestamp: new Date().toISOString(),
				},
			};
			broadcastMessage(responseMessage);
			return Response.json({ success: true });
		}
		return Response.json({ success: true });
	} catch (error) {
		console.error("Error processing SSE message:", error);
		return Response.json(
			{ error: "Failed to process message" },
			{ status: 500 },
		);
	}
}
function broadcastMessage(message: unknown) {
	for (const client of clients) {
		client.enqueue(encodeSSE("message", JSON.stringify(message)));
	}
}
function encodeSSE(event: string, data: string): Uint8Array {
	const encoder = new TextEncoder();
	return encoder.encode(`event: ${event}\ndata: ${data}\n\n`);
}
````

## File: src/app/api/users/[id]/punchcards/route.ts
````typescript
import { type NextRequest, NextResponse } from "next/server";
import { getPunchCardsByUserId } from "@/db/models/punch-cards/punch-cards";
import { auth } from "@clerk/nextjs/server";
import type { ApiResponse } from "@/types/api";
import { getUserByClerkId } from "@/db";
import { convertBigIntToString } from "@/lib/utils";
export async function GET(
	request: NextRequest,
	context: { params: { id: string } },
) {
	console.log("🚀 ~ context:", context);
	console.log("🚀 ~ request:", request);
	try {
		const { userId: clerkId } = await auth();
		if (!clerkId) {
			return NextResponse.json(
				{ success: false, error: "Unauthorized" } as ApiResponse,
				{ status: 401 },
			);
		}
		const dbUser: any = await getUserByClerkId(clerkId);
		const params = await context.params;
		const { id } = params;
		console.log("🚀 ~ id:", id);
		const userId = BigInt(dbUser?.id);
		console.log("🚀 ~ userId:", userId);
		const punchCards = await getPunchCardsByUserId(userId);
		const serializedPunchCards = convertBigIntToString(punchCards);
		return NextResponse.json(
			{
				success: true,
				data: serializedPunchCards,
			} as ApiResponse,
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error fetching punch cards:", error);
		return NextResponse.json(
			{
				success: false,
				error: "Failed to fetch punch cards",
			} as ApiResponse,
			{ status: 500 },
		);
	}
}
````

## File: src/app/api/users/[id]/route.ts
````typescript
import { type NextRequest, NextResponse } from "next/server";
import { getPunchCardsByUserId } from "@/db/models/punch-cards/punch-cards";
import { auth } from "@clerk/nextjs/server";
import type { ApiResponse } from "@/types/api";
import { convertBigInts } from "@/lib/utils";
import { getUserByClerkId } from "@/db/models/users/users";
export async function GET(
	request: NextRequest,
	context: { params: { id: string } },
) {
	console.log("🚀 ~ context:", context);
	console.log("🚀 ~ request:", request);
	try {
		const { userId: clerkId }: any = await auth();
		console.log("🚀 ~ clerkId:", clerkId);
		const dbUser = await getUserByClerkId(clerkId);
		console.log("🚀 ~ dbUser:", dbUser);
		return NextResponse.json(
			{
				success: true,
				data: convertBigInts(dbUser),
			} as ApiResponse,
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error fetching punch cards:", error);
		return NextResponse.json(
			{
				success: false,
				error: "Failed to fetch punch cards",
			} as ApiResponse,
			{ status: 500 },
		);
	}
}
````

## File: src/app/components/ui/BookTestimonial3D.tsx
````typescript
'use client'
import Image from 'next/image';
import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useMediaQuery } from '@react-hook/media-query';
interface Testimonial {
  image?: string;
  text: string;
  name: string;
  jobtitle: string;
  rating: number;
}
interface BookTestimonial3DProps {
  testimonials: Testimonial[];
}
function BookTestimonial3D({ testimonials }: BookTestimonial3DProps) {
  const book = useRef<typeof HTMLFlipBook>(null);
  const isSmallScreen = useMediaQuery('(min-width: 640px)');
  const smallerDevice = isSmallScreen ? false : true;
  const handleFlip = (pageNum: number) => {
    (book.current as any)?.pageFlip()?.flip(pageNum);
    (book.current as any)?.pageFlip()?.flipNext(false);
  }
  return (
    <div className="w-full text-black h-500px flex justify-center items-center py-10">
      <HTMLFlipBook
      ref={book}
      width={300}
      height={450}
      showCover={true}
      usePortrait={smallerDevice}
      onFlip={(e) => console.log(e.data)}
      onChangeState={(e) => console.log(e.data)}
      className={''}
      style={{}}
      startPage={0}
      size={'fixed'}
      minWidth={0}
      maxWidth={0}
      minHeight={0}
      maxHeight={0}
      drawShadow={true}
      flippingTime={1000}
      startZIndex={0}
      autoSize={false}
      maxShadowOpacity={0}
      mobileScrollSupport={true}
      clickEventForward={true}
      useMouseEvents={true}
      swipeDistance={0}
      showPageCorners={true}
      disableFlipByClick={false}>
      {}
      <div className="relative bg-black border rounded-lg p-8 text-white flex flex-col items-center justify-center shadow-lg shadow-gray-600 cursor-grab">
      {}
      <div className="flex justify-center items-center ">
        <Image src={'https://via.placeholder.com/150'} alt="Serenity UI Logo" width={100} height={100} />
      </div>
      {}
      <h1 className="text-4xl mb-36 text-center relative z-10">Serenity UI</h1>
      <div className="w-full h-1 bg-white mb-6 relative z-10"></div>
      <div className='text-center'>
        <span className="text-lg text-white text-center hover:text-gray-300 transition-colors duration-300 relative z-10">
          Read what virtual people are saying about us
        </span>
      </div>
    </div>
        {}
        <div className="w-full h-full flex justify-center items-center bg-zinc-200 border border-gray-300 box-border">
          <div className="page-front text-start text-white p-3 bg-gray-400">Index</div>
          <div className="flex flex-col justify-start items-start p-8 space-y-3">
            <div>
              <ol className="grid grid-cols-2 gap-2 ">
                {testimonials.map((testimonial, index) => (
                  <React.Fragment key={index}>
                    <li onClick={() => handleFlip(index + 2)} className="flex justify-start items-center text-xs cursor-pointer">
                      <Image src={testimonial.image || ''} alt='image' width={20} height={20} className='rounded-full mr-2' />
                      {testimonial.name}
                    </li>
                    <li className="flex justify-end text-xs items-center">{index + 2}</li>
                  </React.Fragment>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {}
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full h-full flex justify-center items-center bg-gray-200 border border-gray-300 box-border cursor-grab">
            <div className="page-front text-end text-white p-3 bg-gray-400">{index + 2}</div>
            <div className='flex justify-center items-center mt-7 '>
              <Image src={testimonial.image || ''} alt='image' width={100} height={100} className='rounded-full' />
            </div>
            <div className='flex flex-col justify-center items-center mt-3'>
              <span>{testimonial.name}</span>
              <span className='text-gray-500 text-sm'>{testimonial.jobtitle}</span>
            </div>
            <div className='p-5 font-serif font-semibold text-center mt'>{testimonial.text}</div>
            <div className='flex justify-center items-center mt-3 '>
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFA800" className="size-8">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#CBD5E1" className="size-8">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
          </div>
        ))}
        {}
        <div className="bg-black border p-8  text-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center font-serif">Thank You!</h1>
          <p className="text-lg text-center">We appreciate your feedback</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
}
export default BookTestimonial3D;
````

## File: src/app/leaderboard/page.tsx
````typescript
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	getTopUsersByPunchCardCount,
	getPopularRestaurantsByPunchCardCount,
} from "@/db/models/leaderboard/leaderboard";
import { convertBigInts } from "@/lib/utils";
import { UserLeaderboard } from "@/components/leaderboard/user-leaderboard";
import { RestaurantLeaderboard } from "@/components/leaderboard/restaurant-leaderboard";
export const metadata = {
	title: "Leaderboard | Restaurant Passport",
	description: "View top users and popular restaurants",
};
export default async function LeaderboardPage() {
	const topUsers = await getTopUsersByPunchCardCount(10);
	const popularRestaurants = await getPopularRestaurantsByPunchCardCount(10);
	const serializedTopUsers = convertBigInts(topUsers);
	const serializedPopularRestaurants = convertBigInts(popularRestaurants);
	return (
		<div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
			<h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
			<Tabs defaultValue="users" className="w-full">
				<TabsList className="grid w-full grid-cols-2 mb-8">
					<TabsTrigger value="users">Top Users</TabsTrigger>
					<TabsTrigger value="restaurants">Popular Restaurants</TabsTrigger>
				</TabsList>
				<TabsContent value="users">
					<Card>
						<CardHeader>
							<CardTitle>Top Users</CardTitle>
							<CardDescription>Users with the most punch cards</CardDescription>
						</CardHeader>
						<CardContent>
							<UserLeaderboard users={serializedTopUsers} />
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="restaurants">
					<Card>
						<CardHeader>
							<CardTitle>Popular Restaurants</CardTitle>
							<CardDescription>
								Restaurants with the most punch cards
							</CardDescription>
						</CardHeader>
						<CardContent>
							<RestaurantLeaderboard
								restaurants={serializedPopularRestaurants}
							/>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
````

## File: src/components/admin/deals/actions.ts
````typescript
"use server";
import { revalidatePath } from "next/cache";
import { createRestaurantDeal } from "@/db/models/restaurants/restaurants";
export type FormState = {
	error: string | null;
	success: boolean;
};
export async function createDeal(
	prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	try {
		const title = formData.get("title") as string;
		const content = formData.get("content") as string;
		const restaurantId = formData.get("restaurantId") as string;
		const active = formData.get("active") === "on";
		if (!title?.trim()) {
			return { error: "Title is required", success: false };
		}
		if (!content?.trim()) {
			return { error: "Content is required", success: false };
		}
		if (!restaurantId) {
			return { error: "Restaurant selection is required", success: false };
		}
		await createRestaurantDeal({
			title,
			content,
			active,
			restaurantId: BigInt(restaurantId),
		});
		revalidatePath("/admin/deals");
		return { error: null, success: true };
	} catch (error) {
		console.error("Error creating deal:", error);
		return {
			error: error instanceof Error ? error.message : "Failed to create deal",
			success: false,
		};
	}
}
````

## File: src/components/admin/deals/deal-detail.tsx
````typescript
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Calendar, Store, Edit, Trash2 } from "lucide-react";
import type { Deal, Restaurant } from "@/types/db";
const getMockDeal = (
	id: string,
): (Deal & { restaurant?: Restaurant }) | null => {
	const deals = [
		{
			id: BigInt(1),
			title: "Half-price Appetizers",
			content: "Enjoy half-price appetizers every Tuesday from 5-7pm.",
			imageUrl: "/images/deals/appetizers.jpg",
			active: true,
			restaurantId: BigInt(1),
			createdAt: new Date("2023-06-15"),
			updatedAt: new Date("2023-06-15"),
			restaurant: {
				id: BigInt(1),
				name: "Pasta Paradise",
				description: "Authentic Italian cuisine",
				imageUrl: "/images/restaurants/pasta-paradise.jpg",
				address: "123 Main St, Anytown, USA",
				qrCodeUrl: null,
			},
		},
		{
			id: BigInt(2),
			title: "Buy One Get One Free",
			content:
				"Buy one entrée and get one of equal or lesser value for free. Valid Monday-Thursday.",
			imageUrl: "/images/deals/bogo.jpg",
			active: true,
			restaurantId: BigInt(2),
			createdAt: new Date("2023-07-01"),
			updatedAt: new Date("2023-07-10"),
			restaurant: {
				id: BigInt(2),
				name: "Burger Barn",
				description: "Gourmet burgers and craft beers",
				imageUrl: "/images/restaurants/burger-barn.jpg",
				address: "456 Oak St, Anytown, USA",
				qrCodeUrl: null,
			},
		},
		{
			id: BigInt(3),
			title: "Free Dessert with Purchase",
			content:
				"Receive a free dessert with any purchase over $25. Limited time offer.",
			imageUrl: "/images/deals/dessert.jpg",
			active: false,
			restaurantId: BigInt(1),
			createdAt: new Date("2023-05-20"),
			updatedAt: new Date("2023-07-15"),
			restaurant: {
				id: BigInt(1),
				name: "Pasta Paradise",
				description: "Authentic Italian cuisine",
				imageUrl: "/images/restaurants/pasta-paradise.jpg",
				address: "123 Main St, Anytown, USA",
				qrCodeUrl: null,
			},
		},
	];
	const parsedId = BigInt(id);
	return deals.find((deal) => deal.id === parsedId) || null;
};
interface DealDetailProps {
	id: string;
}
export function DealDetail({ id }: DealDetailProps) {
	const router = useRouter();
	const [deal, setDeal] = useState<(Deal & { restaurant?: Restaurant }) | null>(
		null,
	);
	const [isLoading, setIsLoading] = useState(true);
	const [isDeleting, setIsDeleting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		const fetchDeal = async () => {
			try {
				setIsLoading(true);
				setError(null);
				await new Promise((resolve) => setTimeout(resolve, 500));
				const dealData = getMockDeal(id);
				if (!dealData) {
					setError("Deal not found");
				} else {
					setDeal(dealData);
				}
			} catch (err) {
				setError("Failed to load deal details");
				console.error("Error fetching deal:", err);
			} finally {
				setIsLoading(false);
			}
		};
		fetchDeal();
	}, [id]);
	const handleDelete = async () => {
		if (!confirm("Are you sure you want to delete this deal?")) {
			return;
		}
		try {
			setIsDeleting(true);
			await new Promise((resolve) => setTimeout(resolve, 500));
			router.push("/admin/deals");
			router.refresh();
		} catch (err) {
			setError("Failed to delete deal");
			setIsDeleting(false);
		}
	};
	if (isLoading) {
		return (
			<div className="bg-white rounded-lg shadow-sm p-6">
				<div className="animate-pulse space-y-4">
					<div className="h-8 bg-gray-200 rounded w-1/3" />
					<div className="h-6 bg-gray-200 rounded w-1/4" />
					<div className="h-32 bg-gray-200 rounded" />
					<div className="h-6 bg-gray-200 rounded w-1/2" />
					<div className="h-6 bg-gray-200 rounded w-1/4" />
				</div>
			</div>
		);
	}
	if (error || !deal) {
		return (
			<div className="bg-white rounded-lg shadow-sm p-6">
				<div className="text-center text-red-600">
					<h3 className="text-lg font-medium">{error || "Deal not found"}</h3>
					<p className="mt-2">
						<Link href="/admin/deals" className="text-blue-500 hover:underline">
							Return to deals
						</Link>
					</p>
				</div>
			</div>
		);
	}
	return (
		<div className="bg-white rounded-lg shadow-sm overflow-hidden">
			{}
			<div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 border-b border-gray-200">
				<div>
					<h2 className="text-xl font-semibold text-gray-900">{deal.title}</h2>
					<div className="mt-1 flex items-center text-sm text-gray-500">
						<Store className="mr-1.5 h-4 w-4" />
						<span>{deal.restaurant?.name}</span>
					</div>
				</div>
				<div className="flex items-center mt-4 md:mt-0 space-x-3">
					<Link
						href={`/admin/deals/${id}/edit`}
						className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					>
						<Edit className="mr-2 h-4 w-4" /> Edit
					</Link>
					<button
						type="button"
						onClick={handleDelete}
						disabled={isDeleting}
						className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
					>
						<Trash2 className="mr-2 h-4 w-4" />{" "}
						{isDeleting ? "Deleting..." : "Delete"}
					</button>
				</div>
			</div>
			{}
			<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
				{}
				<div className="md:col-span-1">
					<div className="aspect-video relative rounded-lg overflow-hidden border border-gray-200">
						{deal.imageUrl ? (
							<Image
								src={deal.imageUrl}
								alt={deal.title}
								fill
								className="object-cover"
							/>
						) : (
							<div className="h-full w-full bg-gray-100 flex items-center justify-center">
								<span className="text-gray-400">No image available</span>
							</div>
						)}
					</div>
					<div className="mt-4">
						<div className="flex items-center justify-between">
							<h3 className="text-sm font-medium text-gray-900">Status</h3>
							<span
								className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
									deal.active
										? "bg-green-100 text-green-800"
										: "bg-red-100 text-red-800"
								}`}
							>
								{deal.active ? "Active" : "Inactive"}
							</span>
						</div>
						<div className="mt-4 space-y-3">
							<div className="flex items-center text-sm">
								<Calendar className="mr-1.5 h-4 w-4 text-gray-400" />
								<span className="text-gray-500">
									Created: {deal.createdAt.toLocaleDateString()}
								</span>
							</div>
							<div className="flex items-center text-sm">
								<Calendar className="mr-1.5 h-4 w-4 text-gray-400" />
								<span className="text-gray-500">
									Last updated: {deal.updatedAt.toLocaleDateString()}
								</span>
							</div>
						</div>
					</div>
				</div>
				{}
				<div className="md:col-span-2">
					<div>
						<h3 className="text-lg font-medium text-gray-900">Description</h3>
						<div className="mt-2 text-gray-600">
							<p>{deal.content}</p>
						</div>
					</div>
					<div className="mt-6">
						<h3 className="text-lg font-medium text-gray-900">
							Restaurant Details
						</h3>
						<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<h4 className="text-sm font-medium text-gray-500">Name</h4>
								<p className="mt-1 text-sm text-gray-900">
									{deal.restaurant?.name}
								</p>
							</div>
							<div>
								<h4 className="text-sm font-medium text-gray-500">Address</h4>
								<p className="mt-1 text-sm text-gray-900">
									{deal.restaurant?.address}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
````

## File: src/components/admin/deals/deal-filters.tsx
````typescript
"use client";
import { useState, useEffect } from "react";
import { getRestaurants } from "@/db/models/restaurants/restaurants";
import type { Deal, Restaurant } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
type RestaurantBasicInfo = {
	id: bigint;
	name: string;
};
export function DealFilters({
	deals,
	restaurants: propsRestaurants,
}: {
	deals: Deal[];
	restaurants: Restaurant[];
}) {
	const [search, setSearch] = useState("");
	const [restaurant, setRestaurant] = useState("all");
	const [status, setStatus] = useState("all");
	const [restaurants, setRestaurants] = useState<RestaurantBasicInfo[]>(
		propsRestaurants.map((r) => ({ id: r.id, name: r.name })),
	);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const fetchRestaurants = async () => {
			setIsLoading(true);
			try {
				const data = await getRestaurants();
				setRestaurants(data.map((r) => ({ id: r.id, name: r.name })));
			} catch (error) {
				console.error("Failed to fetch restaurants:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchRestaurants();
	}, []);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({ search, restaurant, status });
	};
	const handleReset = () => {
		setSearch("");
		setRestaurant("all");
		setStatus("all");
	};
	return (
		<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					{}
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="search">Search</Label>
						<Input
							id="search"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search deals..."
						/>
					</div>
					{}
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="restaurant">Restaurant</Label>
						<Select value={restaurant} onValueChange={setRestaurant}>
							<SelectTrigger id="restaurant">
								<SelectValue placeholder="All Restaurants" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Restaurants</SelectItem>
								{isLoading ? (
									<SelectItem value="loading" disabled>
										Loading...
									</SelectItem>
								) : restaurants && restaurants.length > 0 ? (
									restaurants.map((r) => (
										<SelectItem key={r.id.toString()} value={r.id.toString()}>
											{r.name}
										</SelectItem>
									))
								) : null}
							</SelectContent>
						</Select>
					</div>
					{}
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="status">Status</Label>
						<Select value={status} onValueChange={setStatus}>
							<SelectTrigger id="status">
								<SelectValue placeholder="All Statuses" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Statuses</SelectItem>
								<SelectItem value="active">Active</SelectItem>
								<SelectItem value="inactive">Inactive</SelectItem>
							</SelectContent>
						</Select>
					</div>
					{}
					<div className="flex items-end space-x-2">
						<Button type="submit">Filter</Button>
						<Button type="button" onClick={handleReset} variant="outline">
							Reset
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
````

## File: src/components/admin/admin-dashboard-content.tsx
````typescript
'use client'
import Link from 'next/link'
import type {User} from '@/types/db'
type AdminDashboardContentProps = {
  user: User | null
}
export function AdminDashboardContent({user}: AdminDashboardContentProps) {
  return (
    <div>
      {}
      <div className='bg-white rounded-lg shadow-sm p-6 mb-6'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>Welcome, {user?.name}</h2>
          <p className='text-sm text-gray-500'>Logged in as {user?.email}</p>
        </div>
        <p className='mb-4'>
          This is a protected admin dashboard. Only users with admin privileges
          can access this page.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Link
          href='/admin/users'
          className='block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'
        >
          <h3 className='text-lg font-semibold mb-2'>User Management</h3>
          <p className='text-gray-600'>View and manage user accounts</p>
        </Link>
        <Link
          href='/admin/restaurants'
          className='block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'
        >
          <h3 className='text-lg font-semibold mb-2'>Restaurant Management</h3>
          <p className='text-gray-600'>Add, edit, or remove restaurants</p>
        </Link>
        <Link
          href='/admin/settings'
          className='block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'
        >
          <h3 className='text-lg font-semibold mb-2'>Settings</h3>
          <p className='text-gray-600'>Configure application settings</p>
        </Link>
      </div>
    </div>
  )
}
````

## File: src/components/admin/admin-ui.tsx
````typescript
"use client";
import { SidebarProvider } from "@/components/admin/SidebarContext";
import { AdminContent } from "@/components/admin/admin-content";
export function AdminUI({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<div className="min-h-screen min-w-screen relative">
				<AdminContent>{children}</AdminContent>
			</div>
		</SidebarProvider>
	);
}
````

## File: src/components/admin/csv-upload.tsx
````typescript
'use client'
import React, {useState} from 'react'
import {parseCSV} from '@/lib/csv'
import {toast} from 'sonner'
import {Button} from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert'
import {AlertCircle, FileUp, Loader2} from 'lucide-react'
import {Progress} from '@/components/ui/progress'
type CSVUploadProps = {
  onUpload: (data: Record<string, unknown>[]) => Promise<void>
  requiredColumns: string[]
  entityName: string
  buttonText?: string
  icon?: React.ReactNode
}
export function CSVUpload({
  onUpload,
  requiredColumns,
  entityName,
  buttonText = 'Import CSV',
  icon = <FileUp className='h-4 w-4 mr-2' />,
}: CSVUploadProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setError(null)
    }
  }
  const handleDragOver = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }
  const handleDrop = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    const droppedFile = event.dataTransfer.files?.[0]
    if (droppedFile) {
      if (
        droppedFile.type !== 'text/csv' &&
        !droppedFile.name.endsWith('.csv')
      ) {
        setError('Please upload a CSV file')
        return
      }
      setFile(droppedFile)
      setError(null)
    }
  }
  const handleSubmit = async () => {
    if (!file) {
      setError('Please select a file to upload')
      return
    }
    try {
      setIsUploading(true)
      setError(null)
      setUploadProgress(10)
      const parsedData = await parseCSV(file, requiredColumns)
      setUploadProgress(50)
      await onUpload(parsedData)
      setUploadProgress(100)
      setTimeout(() => {
        setIsOpen(false)
        setIsUploading(false)
        setFile(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
        setUploadProgress(0)
        toast.success(`${entityName} imported successfully`)
      }, 500)
    } catch (error) {
      setError((error as Error).message)
      setIsUploading(false)
      setUploadProgress(0)
    }
  }
  const handleCancel = () => {
    setIsOpen(false)
    setFile(null)
    setError(null)
    setUploadProgress(0)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant='outline' size='sm' className='ml-2'>
          {icon}
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Import {entityName}</DialogTitle>
          <DialogDescription>
            Upload a CSV file containing {entityName.toLowerCase()} data. The
            file must include the following columns:
            <div className='mt-2 text-xs bg-muted p-2 rounded-md'>
              {requiredColumns.join(', ')}
            </div>
          </DialogDescription>
        </DialogHeader>
        <button
          type='button'
          className={`
            mt-4 border-2 border-dashed rounded-md p-6 w-full
            ${error ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'}
            transition-colors duration-200 ease-in-out
            flex flex-col items-center justify-center
            hover:border-primary/50 cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-primary/50
          `}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          aria-label='Upload CSV file'
        >
          <input
            type='file'
            accept='.csv'
            ref={fileInputRef}
            onChange={handleFileChange}
            className='hidden'
            disabled={isUploading}
          />
          <div className='text-center'>
            <FileUp className='mx-auto h-10 w-10 text-muted-foreground' />
            <p className='mt-2 text-sm font-medium'>
              {file
                ? file.name
                : 'Drag & drop your CSV file here or click to browse'}
            </p>
            <p className='mt-1 text-xs text-muted-foreground'>
              {file
                ? `${(file.size / 1024).toFixed(2)} KB`
                : 'CSV files only (max 5MB)'}
            </p>
          </div>
        </button>
        {isUploading && (
          <div className='mt-4'>
            <div className='flex justify-between text-xs mb-1'>
              <span>Uploading...</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className='h-1' />
          </div>
        )}
        {error && (
          <Alert variant='destructive' className='mt-4'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <DialogFooter className='mt-4'>
          <Button
            variant='outline'
            onClick={handleCancel}
            disabled={isUploading}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!file || isUploading}>
            {isUploading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Uploading...
              </>
            ) : (
              'Upload'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
````

## File: src/components/admin/expandable-admin-menu.tsx
````typescript
"use client";
import { useState, useRef, type RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, Home, HelpCircle, Settings, Shield } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";
import React from "react";
export function ExpandableAdminMenu() {
	const [selected, setSelected] = useState<number | null>(null);
	const outsideClickRef: any = useRef(null);
	useOnClickOutside(outsideClickRef, () => setSelected(null));
	const tabs = [
		{ title: "Dashboard", icon: <Home size={20} /> },
		{ title: "Notifications", icon: <Bell size={20} /> },
		{ type: "separator" },
		{ title: "Settings", icon: <Settings size={20} /> },
		{ title: "Support", icon: <HelpCircle size={20} /> },
		{ title: "Security", icon: <Shield size={20} /> },
	];
	const buttonVariants = {
		initial: {
			gap: 0,
			paddingLeft: ".5rem",
			paddingRight: ".5rem",
		},
		animate: (isSelected: boolean) => ({
			gap: isSelected ? ".5rem" : 0,
			paddingLeft: isSelected ? "1rem" : ".5rem",
			paddingRight: isSelected ? "1rem" : ".5rem",
		}),
	};
	const spanVariants = {
		initial: { width: 0, opacity: 0 },
		animate: { width: "auto", opacity: 1 },
		exit: { width: 0, opacity: 0 },
	};
	const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };
	const Separator = () => (
		<div className="mx-1 h-[24px] w-[1.2px] bg-[#555555]" aria-hidden="true" />
	);
	return (
		<div className="mx-auto flex items-center justify-center">
			<div
				ref={outsideClickRef}
				className="mb-8 flex flex-wrap items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-1 shadow-[0_6px_24px_rgba(34,42,53,0.12),0_0_0_1px_rgba(34,42,53,0.05),0_4px_8px_rgba(34,42,53,0.08),0_1px_1px_rgba(34,42,53,0.10)]"
			>
				{tabs.map((tab, index) => {
					if (tab.type === "separator") {
						return <Separator key={`separator-${index}`} />;
					}
					return (
						<motion.button
							key={tab.title}
							variants={buttonVariants}
							initial={false}
							animate="animate"
							custom={selected === index}
							onClick={() => setSelected(index)}
							transition={transition}
							className={`${
								selected === index
									? "bg-neutral-800 text-opacity-100 [&]:text-[#C4EB02]"
									: "hover:bg-neutral-800"
							} relative flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white transition-colors duration-300`}
						>
							{tab.icon}
							<AnimatePresence initial={false}>
								{selected === index && (
									<motion.span
										variants={spanVariants}
										initial="initial"
										animate="animate"
										exit="exit"
										transition={transition}
										className="overflow-hidden"
									>
										{tab.title}
									</motion.span>
								)}
							</AnimatePresence>
						</motion.button>
					);
				})}
			</div>
		</div>
	);
}
````

## File: src/components/admin/punch-cards-list.tsx
````typescript
"use client";
import type { PunchCard } from "@/types/db";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
interface PunchCardsListProps {
	punchCards: PunchCard[];
}
export function PunchCardsList({ punchCards }: PunchCardsListProps) {
	const formatDate = (date: Date) => {
		return new Date(date).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};
	return (
		<div className="border rounded-md">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>ID</TableHead>
						<TableHead>User ID</TableHead>
						<TableHead>Punches</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Last Updated</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{punchCards.map((card) => (
						<TableRow key={card.id.toString()}>
							<TableCell className="font-medium">
								{card.id.toString()}
							</TableCell>
							<TableCell>{card.userId.toString()}</TableCell>
							<TableCell>{card.punches}</TableCell>
							<TableCell>
								<Badge
									variant={card.completed ? "default" : "secondary"}
									className={
										card.completed ? "bg-green-100 text-green-800" : ""
									}
								>
									{card.completed ? "Completed" : "Active"}
								</Badge>
							</TableCell>
							<TableCell>{formatDate(card.updatedAt)}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
````

## File: src/components/admin/restaurant-deals-display.tsx
````typescript
"use client";
import type * as React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import type { Deal } from "./restaurant-quick-view";
interface DealsListProps {
	deals: Deal[];
	activeDeals: number;
	onCreateDeal: () => void;
}
export function DealsList({
	deals,
	activeDeals,
	onCreateDeal,
}: DealsListProps) {
	console.log("🚀 ~ deals:", deals);
	return (
		<>
			<div className="mb-2">
				{activeDeals} active deals out of {deals.length} total
			</div>
			<div className="max-h-32 overflow-auto pr-1 mb-2">
				{deals.map((deal) => (
					<div
						key={deal.id}
						className={`mb-2 p-2 rounded-md ${
							deal.isActive
								? "bg-green-50 dark:bg-green-900/20"
								: "bg-gray-50 dark:bg-gray-800/20"
						}`}
					>
						<div className="flex items-center justify-between">
							<div className="font-medium text-sm">{deal.title}</div>
							<div
								className={`text-xs px-1.5 py-0.5 rounded-full ${
									deal.isActive
										? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
										: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
								}`}
							>
								{deal.isActive ? "Active" : "Inactive"}
							</div>
						</div>
						<div className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
							{deal.content}
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-end">
				<Button
					size="sm"
					variant="outline"
					className="flex items-center gap-1 text-xs"
					onClick={(e: React.MouseEvent) => {
						e.stopPropagation();
						onCreateDeal();
					}}
				>
					<PlusCircle className="h-3 w-3" />
					New Deal
				</Button>
			</div>
		</>
	);
}
interface EmptyDealsProps {
	onCreateDeal: () => void;
}
export function EmptyDeals({ onCreateDeal }: EmptyDealsProps) {
	return (
		<div className="flex flex-col items-center py-2">
			<p className="text-center text-gray-500 dark:text-gray-400 mb-3">
				No deals have been created yet
			</p>
			<Button
				size="sm"
				variant="outline"
				className="flex items-center gap-1"
				onClick={(e: React.MouseEvent) => {
					e.stopPropagation();
					onCreateDeal();
				}}
			>
				<PlusCircle className="h-4 w-4" />
				Create First Deal
			</Button>
		</div>
	);
}
````

## File: src/components/admin/restaurant-form.tsx
````typescript
"use client";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { createRestaurantAction } from "@/app/admin/restaurants/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createRestaurantSchema } from "@/types/schemas";
import Image from "next/image";
type FormData = z.infer<typeof createRestaurantSchema>;
export function RestaurantForm() {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState<FormData>({
		name: "",
		description: "",
		imageUrl: "",
		address: "",
	});
	const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
		{},
	);
	// File upload state
	const [isDragging, setIsDragging] = useState(false);
	const [imageFile, setImageFile] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [uploadError, setUploadError] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error for this field when user types
		if (errors[name as keyof FormData]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};
	// Process the selected file
	const processFile = useCallback((file: File) => {
		// Validate file type
		if (!file.type.match(/image\/(jpeg|jpg|png|webp)/i)) {
			setUploadError("Please upload a valid image file (JPEG, PNG, or WebP)");
			return;
		}
		// Validate file size (max 5MB)
		if (file.size > 5 * 1024 * 1024) {
			setUploadError("Image size should be less than 5MB");
			return;
		}
		setImageFile(file);
		setUploadError(null);
		const reader = new FileReader();
		reader.onload = (e) => {
			const result = e.target?.result as string;
			setImagePreview(result);
			setFormData((prev) => ({
				...prev,
				imageUrl: result,
			}));
		};
		reader.readAsDataURL(file);
	}, []);
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			processFile(file);
		}
	};
	const handleDragEnter = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	}, []);
	const handleDragOver = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			e.stopPropagation();
			if (!isDragging) {
				setIsDragging(true);
			}
		},
		[isDragging],
	);
	const handleDragLeave = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	}, []);
	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragging(false);
			if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
				const file = e.dataTransfer.files[0];
				processFile(file);
			}
		},
		[processFile],
	);
	const openFileDialog = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};
	const uploadImageToServer = async (file: File): Promise<string> => {
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.onloadend = () => {
				resolve(reader.result as string);
			};
			reader.readAsDataURL(file);
		});
	};
	const validateForm = (): boolean => {
		try {
			createRestaurantSchema.parse(formData);
			setErrors({});
			return true;
		} catch (error) {
			if (error instanceof z.ZodError) {
				const newErrors: Partial<Record<keyof FormData, string>> = {};
				for (const err of error.errors) {
					const path = err.path[0] as keyof FormData;
					newErrors[path] = err.message;
				}
				setErrors(newErrors);
			}
			return false;
		}
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (imageFile) {
			try {
				const imageUrl = await uploadImageToServer(imageFile);
				setFormData((prev) => ({
					...prev,
					imageUrl,
				}));
			} catch (error) {
				console.error("Error uploading image:", error);
				setUploadError("Failed to upload image. Please try again.");
				return;
			}
		}
		if (!validateForm()) return;
		setIsSubmitting(true);
		try {
			const result = await createRestaurantAction(formData);
			if (result.success) {
				router.push("/admin/restaurants");
				router.refresh();
			} else {
				console.error("Error creating restaurant:", result.error);
				setIsSubmitting(false);
			}
		} catch (error) {
			console.error("Error creating restaurant:", error);
			setIsSubmitting(false);
		}
	};
	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="space-y-4">
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Restaurant Name
					</label>
					<Input
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className={errors.name ? "border-red-500" : ""}
					/>
					{errors.name && (
						<p className="mt-1 text-sm text-red-600">{errors.name}</p>
					)}
				</div>
				<div>
					<label
						htmlFor="description"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Description
					</label>
					<textarea
						id="description"
						name="description"
						rows={4}
						value={formData.description}
						onChange={handleChange}
						className={`w-full rounded-md border ${
							errors.description ? "border-red-500" : "border-input"
						} bg-transparent px-3 py-2 text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
					/>
					{errors.description && (
						<p className="mt-1 text-sm text-red-600">{errors.description}</p>
					)}
				</div>
				<div>
					<label
						htmlFor="imageUpload"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Restaurant Image
					</label>
					<button
						type="button"
						className={`w-full border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-all ${
							isDragging
								? "border-blue-500 bg-blue-50"
								: errors.imageUrl
									? "border-red-300"
									: "border-gray-300 hover:border-gray-400"
						}`}
						onDragEnter={handleDragEnter}
						onDragOver={handleDragOver}
						onDragLeave={handleDragLeave}
						onDrop={handleDrop}
						onClick={openFileDialog}
						aria-label="Click or drop an image to upload"
					>
						<input
							ref={fileInputRef}
							type="file"
							id="imageUpload"
							accept="image/jpeg,image/png,image/webp"
							className="hidden"
							onChange={handleFileChange}
						/>
						{imagePreview ? (
							<div className="relative w-full h-48 mx-auto mb-2">
								<Image
									src={imagePreview}
									alt="Restaurant preview"
									className="rounded-md object-cover"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						) : (
							<div className="py-8">
								<svg
									className="mx-auto h-12 w-12 text-gray-400"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 48 48"
									aria-hidden="true"
								>
									<path
										d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<p className="mt-2 text-sm text-gray-500">
									Drag and drop an image here, or click to select a file
								</p>
								<p className="mt-1 text-xs text-gray-400">
									PNG, JPG, or WebP (max 5MB)
								</p>
							</div>
						)}
					</button>
					{uploadError && (
						<p className="mt-1 text-sm text-red-600">{uploadError}</p>
					)}
					{errors.imageUrl && !uploadError && (
						<p className="mt-1 text-sm text-red-600">{errors.imageUrl}</p>
					)}
				</div>
				<div>
					<label
						htmlFor="address"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Address
					</label>
					<Input
						id="address"
						name="address"
						value={formData.address}
						onChange={handleChange}
						className={errors.address ? "border-red-500" : ""}
					/>
					{errors.address && (
						<p className="mt-1 text-sm text-red-600">{errors.address}</p>
					)}
				</div>
			</div>
			<div className="flex justify-end space-x-4">
				<Button
					type="button"
					variant="outline"
					onClick={() => router.push("/admin/restaurants")}
					disabled={isSubmitting}
				>
					Cancel
				</Button>
				<Button type="submit" disabled={isSubmitting}>
					{isSubmitting ? "Creating..." : "Create Restaurant"}
				</Button>
			</div>
		</form>
	);
}
````

## File: src/components/BounceCards/BounceCards.tsx
````typescript
import { useEffect } from "react";
import { gsap } from "gsap";
interface BounceCardsProps {
  className?: string;
  images?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}
export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
  ],
  enableHover = false,
}: BounceCardsProps) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay,
      }
    );
  }, [animationDelay, animationStagger, easeType]);
  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    } else if (transformStr === "none") {
      return "rotate(0deg)";
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };
  const getPushedTransform = (
    baseTransform: string,
    offsetX: number
  ): string => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === "none"
        ? `translate(${offsetX}px)`
        : `${baseTransform} translate(${offsetX}px)`;
    }
  };
  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover) return;
    images.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);
      const baseTransform = transformStyles[i] || "none";
      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);
        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;
        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay,
          overwrite: "auto",
        });
      }
    });
  };
  const resetSiblings = () => {
    if (!enableHover) return;
    images.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);
      const baseTransform = transformStyles[i] || "none";
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`card card-${idx} absolute w-[200px] aspect-square border-8 border-white rounded-[30px] overflow-hidden`}
          style={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transform: transformStyles[idx] || "none",
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img
            className="w-full h-full object-cover"
            src={src}
            alt={`card-${idx}`}
          />
        </div>
      ))}
    </div>
  );
}
````

## File: src/components/camera-permission-checker/camera-permission-checker.tsx
````typescript
"use client";
import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AlertTriangle, Camera, Check } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
interface CameraPermissionCheckerProps {
  onPermissionGranted?: () => void;
  onPermissionDenied?: () => void;
  checkOnMount?: boolean;
  showStatus?: boolean;
}
export const CameraPermissionChecker = ({
  onPermissionGranted,
  onPermissionDenied,
  checkOnMount = true,
  showStatus = true,
}: CameraPermissionCheckerProps) => {
  const [permissionStatus, setPermissionStatus] = useState<"granted" | "denied" | "prompt" | "checking" | null>(null);
  const [isIncognito, setIsIncognito] = useState(false);
  const [isArcBrowser, setIsArcBrowser] = useState(false);
  const checkIncognitoMode = useCallback(async () => {
    try {
      if (navigator.userAgent.includes("Arc")) {
        setIsArcBrowser(true);
      }
      const fs = (window as any).RequestFileSystem || (window as any).webkitRequestFileSystem;
      if (fs) {
        fs(
          (window as any).TEMPORARY,
          100,
          () => setIsIncognito(false),
          () => setIsIncognito(true)
        );
      } else if (!navigator.cookieEnabled) {
        setIsIncognito(true);
      } else {
        const serviceWorkerAvailable = 'serviceWorker' in navigator;
        if (!serviceWorkerAvailable) {
          setIsIncognito(true);
        }
      }
    } catch (err) {
      console.error("Error checking incognito mode:", err);
    }
  }, []);
  const checkCameraPermission = useCallback(async () => {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setPermissionStatus("denied");
      onPermissionDenied?.();
      return false;
    }
    try {
      setPermissionStatus("checking");
      if ('permissions' in navigator) {
        try {
          const status = await navigator.permissions.query({ name: 'camera' as PermissionName });
          if (status.state === 'granted') {
            setPermissionStatus("granted");
            onPermissionGranted?.();
            return true;
          } else if (status.state === 'denied') {
            setPermissionStatus("denied");
            onPermissionDenied?.();
            return false;
          } else {
            setPermissionStatus("prompt");
          }
        } catch (err) {
          console.log("Permissions API not supported, falling back to getUserMedia");
        }
      }
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop());
      setPermissionStatus("granted");
      onPermissionGranted?.();
      return true;
    } catch (err) {
      console.error("Camera permission check failed:", err);
      setPermissionStatus("denied");
      onPermissionDenied?.();
      return false;
    }
  }, [onPermissionGranted, onPermissionDenied]);
  const requestPermission = useCallback(async () => {
    try {
      setPermissionStatus("checking");
      if (isArcBrowser && isIncognito) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          stream.getTracks().forEach(track => track.stop());
          setPermissionStatus("granted");
          onPermissionGranted?.();
          toast.success("Camera access granted!");
          return true;
        } catch (firstErr) {
          console.log("Basic permission request failed:", firstErr);
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              video: { facingMode: "environment" },
              audio: false
            });
            stream.getTracks().forEach(track => track.stop());
            setPermissionStatus("granted");
            onPermissionGranted?.();
            toast.success("Camera access granted!");
            return true;
          } catch (secondErr) {
            console.error("Camera permission request failed:", secondErr);
            setPermissionStatus("denied");
            onPermissionDenied?.();
            toast.error("Camera access denied", {
              description: "Please check your browser settings."
            });
            return false;
          }
        }
      } else {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }
        });
        stream.getTracks().forEach(track => track.stop());
        setPermissionStatus("granted");
        onPermissionGranted?.();
        toast.success("Camera access granted!");
        return true;
      }
    } catch (err) {
      console.error("Camera permission request failed:", err);
      setPermissionStatus("denied");
      onPermissionDenied?.();
      toast.error("Camera access denied", {
        description: "Please check your browser settings."
      });
      return false;
    }
  }, [isArcBrowser, isIncognito, onPermissionGranted, onPermissionDenied]);
  useEffect(() => {
    checkIncognitoMode();
    if (checkOnMount) {
      checkCameraPermission();
    }
  }, [checkOnMount, checkCameraPermission, checkIncognitoMode]);
  if (!showStatus) {
    return null;
  }
  return (
    <div className="mb-4">
      {permissionStatus === "granted" && (
        <Alert variant="success" className="bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertTitle>Camera access granted</AlertTitle>
          <AlertDescription>
            You can use the QR scanner.
          </AlertDescription>
        </Alert>
      )}
      {permissionStatus === "denied" && (
        <Alert variant="destructive" className="bg-red-50 border-red-200">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Camera access denied</AlertTitle>
          <AlertDescription className="space-y-2">
            <p>Please allow camera access to use the QR scanner.</p>
            {isArcBrowser && isIncognito && (
              <div className="text-sm bg-amber-50 p-2 rounded border border-amber-100">
                <p className="font-medium">Arc Browser in Incognito Mode Detected</p>
                <p>Check for permission prompts in your browser toolbar.</p>
              </div>
            )}
            <Button onClick={requestPermission} className="mt-2">
              <Camera className="mr-2 h-4 w-4" />
              Request Camera Access
            </Button>
          </AlertDescription>
        </Alert>
      )}
      {(permissionStatus === "prompt" || permissionStatus === null) && (
        <Alert variant="default" className="bg-blue-50 border-blue-200">
          <Camera className="h-4 w-4 text-blue-600" />
          <AlertTitle>Camera permission required</AlertTitle>
          <AlertDescription>
            <p>Grant camera access to use the QR scanner.</p>
            <Button onClick={requestPermission} className="mt-2 bg-blue-600 hover:bg-blue-700">
              Check Camera Permission
            </Button>
          </AlertDescription>
        </Alert>
      )}
      {permissionStatus === "checking" && (
        <Alert variant="default" className="bg-blue-50 border-blue-200">
          <Camera className="h-4 w-4 text-blue-600 animate-pulse" />
          <AlertTitle>Checking camera permission...</AlertTitle>
          <AlertDescription>
            Please wait while we check camera access.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};
````

## File: src/components/camera-permission-checker/index.ts
````typescript
export { CameraPermissionChecker } from "../camera-permission-checker";
````

## File: src/components/camera-permission-checker/README.md
````markdown
# Camera Permission Checker Component

A reusable React component for checking and requesting camera permissions. This component provides a user-friendly interface for handling camera permissions in web applications.

## Features

- Checks camera permission status (granted, denied, prompt, checking)
- Provides visual feedback about the current permission state
- Handles permission requests with retry options
- Special handling for Arc browser in incognito mode
- Allows callback functions for permission granted/denied events

## Usage

### Basic Usage

```tsx
import { CameraPermissionChecker } from "@/components/camera-permission-checker";

export function MyComponent() {
  return (
    <div>
      <h1>My Camera App</h1>
      
      <CameraPermissionChecker
        onPermissionGranted={() => console.log("Camera permission granted")}
        onPermissionDenied={() => console.log("Camera permission denied")}
      />
      
      {/* Rest of your component */}
    </div>
  );
}
```

### Hidden Status Display

You can use the component to check permissions without showing the UI:

```tsx
<CameraPermissionChecker
  onPermissionGranted={() => startCamera()}
  onPermissionDenied={() => showCustomError()}
  showStatus={false}
/>
```

### Custom Permission Flow

You can disable the automatic permission check on mount:

```tsx
function MyComponent() {
  const startScan = () => {
    // Start scanning logic
  };
  
  return (
    <div>
      <button onClick={startScan}>Start Scan</button>
      
      <CameraPermissionChecker
        onPermissionGranted={startScan}
        checkOnMount={false}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onPermissionGranted` | `() => void` | `undefined` | Called when camera permission is granted |
| `onPermissionDenied` | `() => void` | `undefined` | Called when camera permission is denied |
| `checkOnMount` | `boolean` | `true` | Whether to check camera permission when the component mounts |
| `showStatus` | `boolean` | `true` | Whether to show the permission status UI |

## Browser Compatibility

The component includes special handling for:

- Arc browser in incognito mode
- Safari on iOS
- General browser compatibility checks

## Integration with QR Scanner

This component is designed to work seamlessly with QR code scanners and other camera-based features:

```tsx
import { CameraPermissionChecker } from "@/components/camera-permission-checker";
import { QrReader } from "react-qr-reader";

function QrScanner() {
  const [isScanning, setIsScanning] = useState(false);
  
  return (
    <div>
      <CameraPermissionChecker
        onPermissionGranted={() => setIsScanning(true)}
        onPermissionDenied={() => console.log("Please enable camera access")}
      />
      
      {isScanning && (
        <QrReader
          constraints={{ facingMode: "environment" }}
          onResult={(result) => {
            if (result) {
              console.log("QR Code scanned:", result);
            }
          }}
        />
      )}
    </div>
  );
}
```
````

## File: src/components/glitchFx/glitchFx.tsx
````typescript
import React from 'react';
interface GlitchFxProps {
  children?: React.ReactNode;
}
export function GlitchFx({ children }: GlitchFxProps) {
  return (
    <div>
      {children}
    </div>
  );
}
````

## File: src/components/glitchFx/index.tsx
````typescript
export * from './GlitchFx';
````

## File: src/components/icons/BookMarked.tsx
````typescript
'use client'
import {motion, useAnimation} from 'framer-motion'
import type {Variants} from 'framer-motion'
interface BookMarkedProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number
  height?: number
  strokeWidth?: number
  stroke?: string
}
const bookmarkVariants: Variants = {
  normal: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  },
  animate: {
    y: [2, -4, 0],
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 15,
      mass: 1,
    },
  },
}
const staticVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
}
const BookMarked = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = '#ffffff',
  ...props
}: BookMarkedProps) => {
  const controls = useAnimation()
  return (
    <div
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}
      >
        {}
        <motion.path
          d='M10 2v8l3-3 3 3V2'
          variants={bookmarkVariants}
          animate={controls}
        />
        {}
        <motion.path
          d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20'
          variants={staticVariants}
          animate={controls}
        />
      </svg>
    </div>
  )
}
export {BookMarked}
````

## File: src/components/icons/index.tsx
````typescript
export * from './BookMarked'
````

## File: src/components/icons/info-card.tsx
````typescript
'use client'
import {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {cn} from '@/lib/utils'
import React from 'react'
interface InfoCardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
interface InfoCardDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
const InfoCardTitle = React.memo(
  ({children, className, ...props}: InfoCardTitleProps) => {
    return (
      <div className={cn('font-medium mb-1', className)} {...props}>
        {children}
      </div>
    )
  }
)
InfoCardTitle.displayName = 'InfoCardTitle'
const InfoCardDescription = React.memo(
  ({children, className, ...props}: InfoCardDescriptionProps) => {
    return (
      <div
        className={cn('text-muted-foreground leading-4', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
InfoCardDescription.displayName = 'InfoCardDescription'
interface CommonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  storageKey?: string
  dismissType?: 'once' | 'forever'
}
type InfoCardContentProps = CommonCardProps
type InfoCardFooterProps = CommonCardProps
type InfoCardDismissProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  onDismiss?: () => void
}
type InfoCardActionProps = CommonCardProps
const InfoCardContent = React.memo(
  ({children, className, ...props}: InfoCardContentProps) => {
    return (
      <div className={cn('flex flex-col gap-1 text-xs', className)} {...props}>
        {children}
      </div>
    )
  }
)
InfoCardContent.displayName = 'InfoCardContent'
interface MediaItem {
  type?: 'image' | 'video'
  src: string
  alt?: string
  className?: string
  [key: string]: any
}
interface InfoCardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  media: MediaItem[]
  loading?: 'eager' | 'lazy'
  shrinkHeight?: number
  expandHeight?: number
}
const InfoCardImageContext = createContext<{
  handleMediaLoad: (mediaSrc: string) => void
  setAllImagesLoaded: (loaded: boolean) => void
}>({
  handleMediaLoad: () => {},
  setAllImagesLoaded: () => {},
})
const InfoCardContext = createContext<{
  isHovered: boolean
  onDismiss: () => void
}>({
  isHovered: false,
  onDismiss: () => {},
})
function InfoCard({
  children,
  className,
  storageKey,
  dismissType = 'once',
}: InfoCardProps) {
  if (dismissType === 'forever' && !storageKey) {
    throw new Error(
      'A storageKey must be provided when using dismissType="forever"'
    )
  }
  const [isHovered, setIsHovered] = useState(false)
  const [allImagesLoaded, setAllImagesLoaded] = useState(true)
  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window === 'undefined' || dismissType === 'once') return false
    return dismissType === 'forever'
      ? localStorage.getItem(storageKey!) === 'dismissed'
      : false
  })
  const handleDismiss = useCallback(() => {
    setIsDismissed(true)
    if (dismissType === 'forever') {
      localStorage.setItem(storageKey!, 'dismissed')
    }
  }, [storageKey, dismissType])
  const imageContextValue = useMemo(
    () => ({
      handleMediaLoad: () => {},
      setAllImagesLoaded,
    }),
    [setAllImagesLoaded]
  )
  const cardContextValue = useMemo(
    () => ({
      isHovered,
      onDismiss: handleDismiss,
    }),
    [isHovered, handleDismiss]
  )
  return (
    <InfoCardContext.Provider value={cardContextValue}>
      <InfoCardImageContext.Provider value={imageContextValue}>
        <AnimatePresence>
          {!isDismissed && (
            <motion.div
              initial={{opacity: 0, y: 10}}
              animate={{
                opacity: allImagesLoaded ? 1 : 0,
                y: allImagesLoaded ? 0 : 10,
              }}
              exit={{
                opacity: 0,
                y: 10,
                transition: {duration: 0.2},
              }}
              transition={{duration: 0.3, delay: 0}}
              className={cn('group rounded-lg border bg-white p-3', className)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </InfoCardImageContext.Provider>
    </InfoCardContext.Provider>
  )
}
const InfoCardFooter = ({children, className}: InfoCardFooterProps) => {
  const {isHovered} = useContext(InfoCardContext)
  return (
    <motion.div
      className={cn(
        'flex justify-between text-xs text-muted-foreground',
        className
      )}
      initial={{opacity: 0, height: '0px'}}
      animate={{
        opacity: isHovered ? 1 : 0,
        height: isHovered ? 'auto' : '0px',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  )
}
const InfoCardDismiss = React.memo(
  ({children, className, onDismiss, ...props}: InfoCardDismissProps) => {
    const {onDismiss: contextDismiss} = useContext(InfoCardContext)
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault()
      onDismiss?.()
      contextDismiss()
    }
    return (
      <div
        className={cn('cursor-pointer', className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </div>
    )
  }
)
InfoCardDismiss.displayName = 'InfoCardDismiss'
const InfoCardAction = React.memo(
  ({children, className, ...props}: InfoCardActionProps) => {
    return (
      <div className={cn('', className)} {...props}>
        {children}
      </div>
    )
  }
)
InfoCardAction.displayName = 'InfoCardAction'
const InfoCardMedia = ({
  media = [],
  className,
  loading = undefined,
  shrinkHeight = 75,
  expandHeight = 150,
}: InfoCardMediaProps) => {
  const {isHovered} = useContext(InfoCardContext)
  const {setAllImagesLoaded} = useContext(InfoCardImageContext)
  const [isOverflowVisible, setIsOverflowVisible] = useState(false)
  const loadedMedia = useRef(new Set())
  const handleMediaLoad = (mediaSrc: string) => {
    loadedMedia.current.add(mediaSrc)
    if (loadedMedia.current.size === Math.min(3, media.slice(0, 3).length)) {
      setAllImagesLoaded(true)
    }
  }
  const processedMedia = useMemo(
    () =>
      media.map((item) => ({
        ...item,
        type: item.type || 'image',
      })),
    [media]
  )
  const displayMedia = useMemo(
    () => processedMedia.slice(0, 3),
    [processedMedia]
  )
  useEffect(() => {
    if (media.length > 0) {
      setAllImagesLoaded(false)
      loadedMedia.current.clear()
    } else {
      setAllImagesLoaded(true)
    }
  }, [media.length])
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    if (isHovered) {
      timeoutId = setTimeout(() => {
        setIsOverflowVisible(true)
      }, 100)
    } else {
      setIsOverflowVisible(false)
    }
    return () => clearTimeout(timeoutId)
  }, [isHovered])
  const mediaCount = displayMedia.length
  const getRotation = (index: number) => {
    if (!isHovered || mediaCount === 1) return 0
    return (index - (mediaCount === 2 ? 0.5 : 1)) * 5
  }
  const getTranslateX = (index: number) => {
    if (!isHovered || mediaCount === 1) return 0
    return (index - (mediaCount === 2 ? 0.5 : 1)) * 20
  }
  const getTranslateY = (index: number) => {
    if (!isHovered) return 0
    if (mediaCount === 1) return -5
    return index === 0 ? -10 : index === 1 ? -5 : 0
  }
  const getScale = (index: number) => {
    if (!isHovered) return 1
    return mediaCount === 1 ? 1 : 0.95 + index * 0.02
  }
  return (
    <InfoCardImageContext.Provider
      value={{
        handleMediaLoad,
        setAllImagesLoaded,
      }}
    >
      <motion.div
        className={cn('relative mt-2 rounded-md', className)}
        animate={{
          height:
            media.length > 0
              ? isHovered
                ? expandHeight
                : shrinkHeight
              : 'auto',
        }}
        style={{
          overflow: isOverflowVisible ? 'visible' : 'hidden',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.3,
        }}
      >
        <div
          className={cn(
            'relative',
            media.length > 0 ? {height: shrinkHeight} : 'h-auto'
          )}
        >
          {displayMedia.map((item, index) => {
            const {
              type,
              src,
              alt,
              className: itemClassName,
              ...mediaProps
            } = item
            return (
              <motion.div
                key={src}
                className='absolute w-full'
                animate={{
                  rotateZ: getRotation(index),
                  x: getTranslateX(index),
                  y: getTranslateY(index),
                  scale: getScale(index),
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {type === 'video' ? (
                  <video
                    src={src}
                    className={cn(
                      'w-full rounded-md border border-gray-200 object-cover shadow-lg',
                      itemClassName
                    )}
                    onLoadedData={() => handleMediaLoad(src)}
                    preload='metadata'
                    muted
                    playsInline
                    {...mediaProps}
                  />
                ) : (
                  <img
                    src={src}
                    alt={alt}
                    className={cn(
                      'w-full rounded-md border border-gray-200 object-cover shadow-lg',
                      itemClassName
                    )}
                    onLoad={() => handleMediaLoad(src)}
                    loading={loading}
                    {...mediaProps}
                  />
                )}
              </motion.div>
            )
          })}
        </div>
        <motion.div
          className='absolute right-0 bottom-0 left-0 h-10 bg-gradient-to-b from-transparent to-white'
          animate={{opacity: isHovered ? 0 : 1}}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.3,
          }}
        />
      </motion.div>
    </InfoCardImageContext.Provider>
  )
}
export {
  InfoCard,
  InfoCardTitle,
  InfoCardDescription,
  InfoCardContent,
  InfoCardMedia,
  InfoCardFooter,
  InfoCardDismiss,
  InfoCardAction,
}
````

## File: src/components/icons/Martini.tsx
````typescript
'use client'
import type {Variants} from 'framer-motion'
import {animate, motion, useAnimation} from 'framer-motion'
const variants: Variants = {
  normal: {
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  animate: {
    rotate: [-5, 0],
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
}
interface MartiniProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number
  height?: number
  strokeWidth?: number
  stroke?: string
}
const Martini = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = '#000',
  className,
  ...props
}: MartiniProps) => {
  const controls = useAnimation()
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      stroke={'#000'}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      variants={variants}
      animate={controls}
      style={{originX: '50%', originY: '50%'}}
    >
      <path d='M8 22h8' />
      <path d='M12 11v11' />
      <path d='m19 3-7 8-7-8Z' />
    </motion.svg>
  )
}
export {Martini}
````

## File: src/components/icons/PartyPopper.tsx
````typescript
'use client'
import type {Variants} from 'framer-motion'
import {motion, useAnimation} from 'framer-motion'
const linesVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    translateX: 0,
    translateY: 0,
  },
  animate: {
    opacity: [0, 1],
    scale: [0.3, 0.8, 1, 1.1, 1],
    pathLength: [0, 0.5, 1],
    translateX: [-5, 0],
    translateY: [5, 0],
    transition: {
      type: 'spring',
      damping: 35,
      duration: 0.7,
      stiffness: 240,
      velocity: 0.3,
    },
  },
}
const dotsVariants: Variants = {
  normal: {opacity: 1, scale: 1, translateX: 0, translateY: 0},
  animate: {
    opacity: [0, 1],
    translateX: [-5, 0],
    translateY: [5, 0],
    scale: [0.5, 0.8, 1, 1.1, 1],
    transition: {
      type: 'spring',
      damping: 35,
      duration: 0.7,
      stiffness: 240,
    },
  },
}
const popperVariants: Variants = {
  normal: {translateX: 0, translateY: 0},
  animate: {
    translateX: [-1.5, 0],
    translateY: [1.5, 0],
    transition: {
      type: 'spring',
      damping: 35,
      stiffness: 200,
      velocity: 0.3,
      mass: 4,
    },
  },
}
interface PartyPopperProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number
  height?: number
  strokeWidth?: number
  stroke?: string
}
const PartyPopper = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = '#ffffff',
  ...props
}: PartyPopperProps) => {
  const controls = useAnimation()
  return (
    <div
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}
      >
        <motion.path
          d='M5.8 11.3 2 22l10.7-3.79'
          variants={popperVariants}
          animate={controls}
        />
        <motion.path
          d='M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z'
          variants={popperVariants}
          animate={controls}
        />
        <motion.path d='M4 3h.01' variants={dotsVariants} animate={controls} />
        <motion.path d='M22 8h.01' variants={dotsVariants} animate={controls} />
        <motion.path d='M15 2h.01' variants={dotsVariants} animate={controls} />
        <motion.path
          d='M22 20h.01'
          variants={dotsVariants}
          animate={controls}
        />
        <motion.path
          d='m14 10 1.21-1.06c0.16-0.84 0.9-1.44 1.76-1.44h0.38c0.88 0 1.55-0.77 1.45-1.63a2.9 2.9 0 0 1 1.96-3.12L22 2'
          variants={linesVariants}
          animate={controls}
        />
        <motion.path
          d='M17 15h0.77c0.71 0 1.32-0.52 1.43-1.22c0.16-0.91 1.12-1.45 1.98-1.11L22 13'
          variants={linesVariants}
          animate={controls}
        />
        <motion.path
          d='M9 7V6.23c0-0.71 0.52-1.33 1.22-1.43c0.91-0.16 1.45-1.12 1.11-1.98L11 2'
          variants={linesVariants}
          animate={controls}
        />
      </svg>
    </div>
  )
}
export {PartyPopper}
````

## File: src/components/icons/Percent.tsx
````typescript
'use client'
import type {Variants} from 'framer-motion'
import {motion, useAnimation} from 'framer-motion'
const lineVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
}
const circleVariants: Variants = {
  normal: (custom: {x: number; y: number}) => ({
    x: custom.x,
    y: custom.y,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
  animate: (custom: {x: number; y: number}) => ({
    x: custom.x === 6.5 ? 17.5 : 6.5,
    y: custom.y === 6.5 ? 17.5 : 6.5,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  }),
}
interface PercentProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number
  height?: number
  strokeWidth?: number
  stroke?: string
}
const Percent = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = '#ffffff',
  ...props
}: PercentProps) => {
  const controls = useAnimation()
  return (
    <div
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}
      >
        <motion.line
          x1='19'
          x2='5'
          y1='5'
          y2='19'
          variants={lineVariants}
          animate={controls}
        />
        <motion.circle
          r='2.5'
          variants={circleVariants}
          animate={controls}
          custom={{x: 6.5, y: 6.5}}
          initial={{x: 6.5, y: 6.5}}
        />
        <motion.circle
          r='2.5'
          variants={circleVariants}
          animate={controls}
          custom={{x: 17.5, y: 17.5}}
          initial={{x: 17.5, y: 17.5}}
        />
      </svg>
    </div>
  )
}
export {Percent}
````

## File: src/components/icons/Salad.tsx
````typescript
'use client'
import type {Variants} from 'framer-motion'
import {motion, useAnimation} from 'framer-motion'
const pathVariants: Variants = {
  normal: {
    translateY: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 13,
    },
  },
  animate: {
    translateY: [-4, 0],
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 200,
      damping: 13,
    },
  },
}
interface SaladProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number
  height?: number
  strokeWidth?: number
  stroke?: string
}
const Salad = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = '#ffffff',
  ...props
}: SaladProps) => {
  const controls = useAnimation()
  return (
    <div
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}
      >
        {}
        <path d='M7 21h10' />
        <path d='M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z' />
        {}
        <motion.g variants={pathVariants} animate={controls} initial='normal'>
          <path d='M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1' />
          <path d='m13 12 4-4' />
          <path d='M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2' />
        </motion.g>
      </svg>
    </div>
  )
}
export {Salad}
````

## File: src/components/icons/ThumbsDown.tsx
````typescript
'use client'
import type {Variants} from 'framer-motion'
import {motion, useAnimation} from 'framer-motion'
const variants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    y: 0,
  },
  animate: {
    scale: [1, 1.04, 1],
    rotate: [0, -8, 8, -8, 0],
    y: [0, -2, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
}
interface ThumbsDownProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number
  height?: number
  strokeWidth?: number
  stroke?: string
}
const ThumbsDown = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = '#ffffff',
  ...props
}: ThumbsDownProps) => {
  const controls = useAnimation()
  return (
    <div
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        variants={variants}
        animate={controls}
      >
        <path d='M17 14V2' />
        <path d='M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z' />
      </motion.svg>
    </div>
  )
}
export {ThumbsDown}
````

## File: src/components/icons/ThumbsUp.tsx
````typescript
'use client'
import type {Variants} from 'framer-motion'
import {motion, useAnimation} from 'framer-motion'
const variants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    y: 0,
  },
  animate: {
    scale: [1, 1.04, 1],
    rotate: [0, -8, 8, -8, 0],
    y: [0, -2, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
}
interface ThumbsUpProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number
  height?: number
  strokeWidth?: number
  stroke?: string
}
const ThumbsUp = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = '#ffffff',
  ...props
}: ThumbsUpProps) => {
  const controls = useAnimation()
  return (
    <div
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        variants={variants}
        animate={controls}
      >
        <path d='M7 10v12' />
        <path d='M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z' />
      </motion.svg>
    </div>
  )
}
export {ThumbsUp}
````

## File: src/components/icons/Wine.tsx
````typescript
'use client'
import type {Variants} from 'framer-motion'
import {motion, useAnimation} from 'framer-motion'
const variants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    y: 0,
  },
  animate: {
    scale: [1, 1.04, 1],
    rotate: [0, -8, 8, -8, 0],
    y: [0, -2, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  },
}
interface WineProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number
  height?: number
  strokeWidth?: number
  stroke?: string
}
const Wine = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = '#ffffff',
  ...props
}: WineProps) => {
  const controls = useAnimation()
  return (
    <div
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 24 24'
        fill='none'
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
        variants={variants}
        animate={controls}
      >
        <path d='M8 22h8' />
        <path d='M7 10h10' />
        <path d='M12 15v7' />
        <path d='M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z' />
      </motion.svg>
    </div>
  )
}
export {Wine}
````

## File: src/components/kokonutui/btn-08.tsx
````typescript
"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Twitter, Facebook, Linkedin, Link } from "lucide-react";
export default function Btn08({
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const [isHovered, setIsHovered] = useState(false);
    const shareButtons = [
        { icon: Twitter },
        { icon: Facebook },
        { icon: Linkedin },
        { icon: Link },
    ];
    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Button
                className={cn(
                    "min-w-40 relative",
                    "bg-white dark:bg-black",
                    "hover:bg-gray-50 dark:hover:bg-gray-950",
                    "text-black dark:text-white",
                    "border border-black/10 dark:border-white/10",
                    "transition-all duration-300",
                    isHovered ? "opacity-0" : "opacity-100",
                    className
                )}
                {...props}
            >
                <span className="flex items-center gap-2">
                    <Link className="w-4 h-4" />
                    Share
                </span>
            </Button>
            <div className="absolute top-0 left-0 flex h-10">
                {shareButtons.map((button, index) => (
                    <button
                        type="button"
                        key={index}
                        className={cn(
                            "h-10",
                            "w-10",
                            "flex items-center justify-center",
                            "bg-black dark:bg-white",
                            "text-white dark:text-black",
                            "transition-all duration-300",
                            index === 0 && "rounded-l-md",
                            index === 3 && "rounded-r-md",
                            "border-r border-white/10 dark:border-black/10 last:border-r-0",
                            "hover:bg-gray-900 dark:hover:bg-gray-100",
                            "transform",
                            isHovered
                                ? "translate-x-[0%] opacity-100"
                                : "translate-x-[-100%] opacity-0",
                            index === 0 && "transition-all duration-200",
                            index === 1 &&
                                "transition-all duration-200 delay-[50ms]",
                            index === 2 &&
                                "transition-all duration-200 delay-100",
                            index === 3 &&
                                "transition-all duration-200 delay-150"
                        )}
                    >
                        <button.icon className="w-4 h-4" />
                    </button>
                ))}
            </div>
        </div>
    );
}
````

## File: src/components/kokonutui/profile-02.tsx
````typescript
import { Button } from "@/components/ui/button";
import { Mail, Link as LinkIcon, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
interface Profile02Props {
    name?: string;
    role?: string;
    avatar?: string;
    location?: string;
    email?: string;
    website?: string;
    bio?: string;
}
const defaultProfile = {
    name: "Alex Thompson",
    role: "Product Designer",
    avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
    location: "San Francisco, CA",
    email: "hello@kokonutui.com",
    website: "https://kokonutui.com/",
    bio: "Designing interfaces that bridge the gap between complexity and simplicity.",
} satisfies Required<Profile02Props>;
export default function Profile02({
    name = defaultProfile.name,
    role = defaultProfile.role,
    avatar = defaultProfile.avatar,
    location = defaultProfile.location,
    email = defaultProfile.email,
    website = defaultProfile.website,
    bio = defaultProfile.bio,
}: Partial<Profile02Props> = defaultProfile) {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xs">
                <div className="flex items-start gap-5">
                    <Image
                        src={avatar}
                        alt={name}
                        width={80}
                        height={80}
                        className="rounded-lg object-cover ring-1 ring-zinc-200 dark:ring-zinc-800"
                    />
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                            <div>
                                <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                                    {name}
                                </h2>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    {role}
                                </p>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                                <a href={`mailto:${email}`}>
                                    <Mail className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <MapPin className="w-4 h-4" />
                                {location}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <Mail className="w-4 h-4" />
                                <a
                                    href={`mailto:${email}`}
                                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                >
                                    {email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <LinkIcon className="w-4 h-4" />
                                <a
                                    href={`https://${website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1"
                                >
                                    {website}
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {bio}
                    </p>
                </div>
            </div>
        </div>
    );
}
````

## File: src/components/kokonutui/profile-04.tsx
````typescript
import { LogOut, Flame, Shield, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
interface Profile04Props {
    name: string;
    role: string;
    avatar: string;
    subscription?: string;
    email?: string;
    level?: number;
    currentExp?: number;
    maxExp?: number;
}
const defaultProfile = {
    name: "Kokonut",
    role: "Making apps",
    avatar: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-04-uuYHWIRvVPi01gEt6NwnGyjqLeeZhz.png",
    subscription: "Maker",
    email: "hello@kokonutui.com",
    level: 42,
    currentExp: 2800,
    maxExp: 4000,
} satisfies Required<Profile04Props>;
export default function Profile04({
    name = defaultProfile.name,
    role = defaultProfile.role,
    avatar = defaultProfile.avatar,
    subscription = defaultProfile.subscription,
    email = defaultProfile.email,
    level = defaultProfile.level,
    currentExp = defaultProfile.currentExp,
    maxExp = defaultProfile.maxExp,
}: Partial<Profile04Props> = defaultProfile) {
    const menuItems = [
        {
            icon: <ArrowUpRight className="w-4 h-4 text-amber-500" />,
            label: "Current Level",
            value: level,
            desc: `${currentExp} / ${maxExp} XP`,
            progress: (currentExp / maxExp) * 100,
        },
        {
            icon: <Flame className="w-4 h-4 text-red-500" />,
            label: "Daily Streak",
            value: "7 days",
            desc: "🔥 Keep it up!",
        },
        {
            icon: <Shield className="w-4 h-4 text-emerald-500" />,
            label: "Achievements",
            value: "12/30",
            desc: "Master III",
        },
    ];
    return (
        <div className="w-full max-w-md mx-auto">
            <div
                className="relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800
                bg-linear-to-b from-white to-zinc-50/50 dark:from-zinc-900 dark:to-zinc-900/50"
            >
                <div className="flex items-start justify-between mb-6">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <Image
                                src={avatar}
                                alt={name}
                                width={64}
                                height={64}
                                className="rounded-xl ring-2 ring-zinc-100 dark:ring-zinc-800"
                            />
                            <Badge
                                variant="secondary"
                                className="mt-2 px-2 py-0.5 text-xs font-medium
                                    bg-linear-to-r from-amber-100 to-amber-200
                                    dark:from-amber-900/50 dark:to-amber-800/50
                                    text-amber-700 dark:text-amber-400
                                    border-amber-200/50 dark:border-amber-800/50"
                            >
                                {subscription}
                            </Badge>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-zinc-500">{role}</p>
                            <p className="text-sm text-zinc-400">{email}</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                        <LogOut className="w-4 h-4" />
                    </Button>
                </div>
                <div className="space-y-4">
                    {menuItems.map((item) => (
                        <div
                            key={item.label}
                            className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50
                                border border-zinc-200/50 dark:border-zinc-800/50"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {item.icon}
                                    <span className="text-sm font-medium">
                                        {item.label}
                                    </span>
                                </div>
                                <span className="text-lg font-semibold">
                                    {item.value}
                                </span>
                            </div>
                            {item.progress ? (
                                <div className="space-y-2">
                                    <Progress
                                        value={item.progress}
                                        className="h-2"
                                    />
                                    <p className="text-xs text-zinc-400">
                                        {item.desc}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-xs text-zinc-400">
                                    {item.desc}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
````

## File: src/components/motion-primitives/animated-group.tsx
````typescript
'use client'
import type {ReactNode} from 'react'
import {motion, type Variants} from 'framer-motion'
import React from 'react'
export type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'zoom'
  | 'flip'
  | 'bounce'
  | 'rotate'
  | 'swing'
export type AnimatedGroupProps = {
  children: ReactNode
  className?: string
  variants?: {
    container?: Variants
    item?: Variants
  }
  preset?: PresetType
  as?: React.ElementType
  asChild?: React.ElementType
}
const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
const defaultItemVariants: Variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
}
const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: {y: 20},
    visible: {y: 0},
  },
  scale: {
    hidden: {scale: 0.8},
    visible: {scale: 1},
  },
  blur: {
    hidden: {filter: 'blur(4px)'},
    visible: {filter: 'blur(0px)'},
  },
  'blur-slide': {
    hidden: {filter: 'blur(4px)', y: 20},
    visible: {filter: 'blur(0px)', y: 0},
  },
  zoom: {
    hidden: {scale: 0.5},
    visible: {
      scale: 1,
      transition: {type: 'spring', stiffness: 300, damping: 20},
    },
  },
  flip: {
    hidden: {rotateX: -90},
    visible: {
      rotateX: 0,
      transition: {type: 'spring', stiffness: 300, damping: 20},
    },
  },
  bounce: {
    hidden: {y: -50},
    visible: {
      y: 0,
      transition: {type: 'spring', stiffness: 400, damping: 10},
    },
  },
  rotate: {
    hidden: {rotate: -180},
    visible: {
      rotate: 0,
      transition: {type: 'spring', stiffness: 200, damping: 15},
    },
  },
  swing: {
    hidden: {rotate: -10},
    visible: {
      rotate: 0,
      transition: {type: 'spring', stiffness: 300, damping: 8},
    },
  },
}
const addDefaultVariants = (variants: Variants) => ({
  hidden: {...defaultItemVariants.hidden, ...variants.hidden},
  visible: {...defaultItemVariants.visible, ...variants.visible},
})
function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = 'div',
  asChild = 'div',
}: AnimatedGroupProps) {
  const selectedVariants = {
    item: addDefaultVariants(preset ? presetVariants[preset] : {}),
    container: addDefaultVariants(defaultContainerVariants),
  }
  const containerVariants = variants?.container || selectedVariants.container
  const itemVariants = variants?.item || selectedVariants.item
  const MotionComponent = React.useMemo(
    () => motion.create(as as keyof JSX.IntrinsicElements),
    [as]
  )
  const MotionChild = React.useMemo(
    () => motion.create(asChild as keyof JSX.IntrinsicElements),
    [asChild]
  )
  return (
    <MotionComponent
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <MotionChild key={index} variants={itemVariants}>
          {child}
        </MotionChild>
      ))}
    </MotionComponent>
  )
}
export {AnimatedGroup}
````

## File: src/components/motion-primitives/animated-number.tsx
````typescript
'use client'
import {cn} from '@/lib/utils'
import {
  motion,
  type SpringOptions,
  useInView,
  useSpring,
  useTransform,
} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'
export function AnimatedNumberInView(num: unknown) {
  console.log('🚀 ~ AnimatedNumberInView ~ num:', num)
  const [value, setValue] = useState(num.value)
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <div className='flex w-full items-center justify-center' ref={ref}>
      <AnimatedNumber
        className='inline-flex items-center font-mono text-2xl font-light text-zinc-800 dark:text-zinc-50'
        springOptions={{
          bounce: 0,
          duration: 10000,
        }}
        value={value}
      />
    </div>
  )
}
export type AnimatedNumberProps = {
  value: number
  className?: string
  springOptions?: SpringOptions
  as?: React.ElementType
}
export function AnimatedNumber({
  value,
  className,
  springOptions,
  as = 'span',
}: AnimatedNumberProps) {
  console.log('🚀 ~ value:', value)
  const MotionComponent = motion.create(as as React.ElementType)
  const spring = useSpring(Number(value.value), springOptions)
  console.log('🚀 ~ spring:', spring)
  const display = useTransform(spring, (current: number) =>
    Math.round(current).toLocaleString()
  )
  useEffect(() => {
    spring.set(value)
  }, [spring, value])
  return (
    <MotionComponent className={cn('tabular-nums', className)}>
      {display}
    </MotionComponent>
  )
}
````

## File: src/components/nav/nav-scanner.tsx
````typescript
"use client";
import { useEffect, useState } from "react";
import {
  Scanner,
  useDevices,
  outline,
  boundingBox,
  centerText,
} from "@yudiel/react-qr-scanner";
import { processQrScan } from "@/actions/scan-actions"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Spinner } from "@/components/ui/spinner"
import { CheckCircle } from "lucide-react"
const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: "easeOut",
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	exit: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 0.2,
			ease: "easeIn",
			when: "afterChildren",
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};
const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3, ease: "easeOut" },
	},
	exit: {
		opacity: 0,
		y: 10,
		transition: { duration: 0.2, ease: "easeIn" },
	},
};
const styles = {
  container: {
    width: 400,
    margin: "auto",
  },
  controls: {
    marginBottom: 8,
  },
};
export  function NavScanner({userId, closeModal}: {userId: string, closeModal: () => void}) {
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined);
  const [tracker, setTracker] = useState<string | undefined>("centerText");
  const [pause, setPause] = useState(false);
  const router = useRouter();
  console.log("🚀 ~ NavScanner ~ router:", router)
	const [qrCodeData, setQrCodeData] = useState<string>("");
	const [checkingPunchCardStatus, setCheckingPunchCardStatus] = useState<boolean>(false);
	const [result, setResult] = useState<string | null>(null);
	// QR scanning logic moved from NavScannerButton to Nav
	// Effect to ensure redirection happens after successful scan
	useEffect(() => {
		if (result && userId) {
			// Give time for modal to close and success message to show
			const redirectTimeout = setTimeout(() => {
        closeModal()
				router.push(`/users/${userId}/profile`);
			}, 2500);
			return () => clearTimeout(redirectTimeout);
		}
	}, [result, router, userId, closeModal]);
  console.log("🚀 ~ NavScanner ~ result:", result)
  const devices = useDevices();
  function getTracker() {
    switch (tracker) {
      case "outline":
        return outline;
      case "boundingBox":
        return boundingBox;
      case "centerText":
        return centerText;
      default:
        return undefined;
    }
  }
  const handleScan = async (data: string) => {
    console.log("🚀 ~ handleScan ~ data:", data)
    setPause(true);
    setCheckingPunchCardStatus(true)
    try {
      if(data?.includes("/restaurants/")) {
     const res = await processQrScan({
      qrData: data,
      userId,
     })
     console.log("🚀 ~ handleScan ~ res:", res)
     setResult(res)
    }
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setPause(false);
    }
  };
  return (
    <AnimatePresence>
    	{!result  && (
											<motion.div
											key="scanner"
											variants={itemVariants}
											initial="hidden"
											animate="visible"
											exit="exit"
											className="w-full max-w-[350px] h-[350px] mx-auto relative rounded-lg overflow-hidden"
											>
      <div style={styles.controls}>
        <select onChange={(e) => setDeviceId(e.target.value)}>
          <option value={undefined}>Select a device</option>
          {devices.map((device, index) => (
            <option key={index} value={device.deviceId}>
              {device.label}
            </option>
          ))}
        </select>
      </div>
      <Scanner
        formats={[
          "qr_code",
          "micro_qr_code",
          "rm_qr_code",
          "maxi_code",
          "pdf417",
          "aztec",
          "data_matrix",
          "matrix_codes",
          "dx_film_edge",
          "databar",
          "databar_expanded",
          "codabar",
          "code_39",
          "code_93",
          "code_128",
          "ean_8",
          "ean_13",
          "itf",
          "linear_codes",
          "upc_a",
          "upc_e",
        ]}
        constraints={{
          deviceId: deviceId,
        }}
        onScan={(detectedCodes) => {
          console.log("🚀 ~ NavScanner ~ detectedCodes:", detectedCodes)
          handleScan(detectedCodes[0].rawValue);
        }}
        onError={(error) => {
          console.log("🚀 ~ NavScanner ~ error:", error)
          console.log(`onError: ${error}'`);
        }}
        styles={{ container: { height: "400px", width: "350px" } }}
        components={{
          audio: true,
          onOff: true,
          torch: true,
          zoom: true,
          finder: true,
          tracker: getTracker(),
        }}
        allowMultiple={true}
        scanDelay={2000}
        paused={pause}
      />
      </motion.div>
      )}
      {checkingPunchCardStatus && !result && (
        <motion.div
          key="processing"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-center py-2"
        >
          <Spinner className="w-8 h-8 mx-auto" />
          <p className="mt-2">Processing your scan...</p>
        </motion.div>
      )}
      {result && (
        <motion.div
          key="success"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-center py-2 bg-green-50 rounded-md p-3 w-full"
        >
          <CheckCircle className="w-8 h-8 mx-auto text-green-500" />
          <h3 className="text-lg font-medium mt-2">
            {result?.restaurantName}
          </h3>
          <p className="font-medium mt-2">
            {result?.message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
````

## File: src/components/progress-indicator/index.tsx
````typescript
export * from './ProgressIndicator';
````

## File: src/components/progress-indicator/progress-indicator.tsx
````typescript
import {
  AnimatedNumber,
  AnimatedNumberInView,
} from '@/components/motion-primitives/animated-number'
import type {PunchCardWithRestaurant} from '@/types/api'
import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion'
import React, {useEffect, useState} from 'react'
interface ProgressIndicatorProps {
  punches: PunchCardWithRestaurant[]
}
export function ProgressIndicator({punches}: ProgressIndicatorProps) {
  const [percentageProgress, setPercentageProgress] = React.useState(
    (punches?.length ? punches?.length / 10 : 0).toFixed(0)
  )
  console.log(
    '🚀 ~ ProgressIndicator ~ percentageProgress:',
    percentageProgress
  )
  const TOTAL_PUNCH_CARDS = 10
  const [currentPunches, setCurrentPunches] = React.useState(punches.length)
  const percentage = (currentPunches / TOTAL_PUNCH_CARDS) * 100
  useEffect(() => {
    setCurrentPunches(punches.length)
    setPercentageProgress(percentage)
  }, [punches, percentage])
  const width = useMotionValue(percentageProgress)
  const [value, setValue] = useState(percentageProgress)
  console.log('🚀 ~ ProgressIndicator ~ width:', width)
  return (
    <div className='flex flex-col p-4 gap-2 w-full'>
      <h4 className='text-base font-medium mb-4'>Passport Progress</h4>
      <div className='flex items-center gap-2 w-44 py-1.5 px-2 w-full'>
        <motion.div
          layoutId='progress-bar'
          className='flex-1 h-2 bg-gray-100 rounded-full'
        >
          <motion.div
            className='h-full bg-green-500 rounded-full w-0'
            animate={{width: `${percentageProgress}%`}}
            transition={{duration: 0.5, delay: 0.5}}
          />
        </motion.div>
        <motion.span layoutId='progress-text' className='text-gray-600 text-sm'>
          {percentageProgress}%
        </motion.span>
      </div>
    </div>
  )
}
````

## File: src/components/ui/alert-dialog.tsx
````typescript
"use client"
import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}
function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}
function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}
function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className
      )}
      {...props}
    />
  )
}
function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}
function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}
function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}
function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
}
function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}
function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}
function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  )
}
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
````

## File: src/components/ui/alert.tsx
````typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const alertVariants = cva(
	"relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
	{
		variants: {
			variant: {
				default: "bg-background text-foreground",
				destructive:
					"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
				success:
					"border-green-500/50 text-green-700 bg-green-50 dark:border-green-500 [&>svg]:text-green-500",
				info: "border-blue-500/50 text-blue-700 bg-blue-50 dark:border-blue-500 [&>svg]:text-blue-500",
				warning:
					"border-yellow-500/50 text-yellow-700 bg-yellow-50 dark:border-yellow-500 [&>svg]:text-yellow-500",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);
const Alert = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
	<div
		ref={ref}
		role="alert"
		className={cn(alertVariants({ variant }), className)}
		{...props}
	/>
));
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5
		ref={ref}
		className={cn("mb-1 font-medium leading-none tracking-tight", className)}
		{...props}
	/>
));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("text-sm [&_p]:leading-relaxed", className)}
		{...props}
	/>
));
AlertDescription.displayName = "AlertDescription";
export { Alert, AlertTitle, AlertDescription };
````

## File: src/components/ui/data-table.tsx
````typescript
import * as React from "react";
import * as Divider from "@/components/ui/divider";
import { cn } from "@/utils/cn";
const Table = React.forwardRef<
	HTMLTableElement,
	React.TableHTMLAttributes<HTMLTableElement>
>(({ className, ...rest }, forwardedRef) => {
	return (
		<div className={cn("w-full overflow-x-auto", className)}>
			<table ref={forwardedRef} className="w-full" {...rest} />
		</div>
	);
});
Table.displayName = "Table";
const TableHeader = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ ...rest }, forwardedRef) => {
	return <thead ref={forwardedRef} {...rest} />;
});
TableHeader.displayName = "TableHeader";
const TableHead = React.forwardRef<
	HTMLTableCellElement,
	React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...rest }, forwardedRef) => {
	return (
		<th
			ref={forwardedRef}
			className={cn(
				"bg-bg-weak-50 px-3 py-2 text-left text-paragraph-sm text-text-sub-600 first:rounded-l-lg last:rounded-r-lg",
				className,
			)}
			{...rest}
		/>
	);
});
TableHead.displayName = "TableHead";
const TableBody = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement> & {
		spacing?: number;
	}
>(({ spacing = 8, ...rest }, forwardedRef) => {
	return (
		<>
			{}
			<tbody
				aria-hidden="true"
				className="table-row"
				style={{
					height: spacing,
				}}
			/>
			<tbody ref={forwardedRef} {...rest} />
		</>
	);
});
TableBody.displayName = "TableBody";
const TableRow = React.forwardRef<
	HTMLTableRowElement,
	React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...rest }, forwardedRef) => {
	return (
		<tr ref={forwardedRef} className={cn("group/row", className)} {...rest} />
	);
});
TableRow.displayName = "TableRow";
function TableRowDivider({
	className,
	dividerClassName,
	...rest
}: React.ComponentPropsWithoutRef<typeof Divider.Root> & {
	dividerClassName?: string;
}) {
	return (
		<tr aria-hidden="true" className={className}>
			<td colSpan={999} className="py-1">
				<Divider.Root
					variant="line-spacing"
					className={dividerClassName}
					{...rest}
				/>
			</td>
		</tr>
	);
}
TableRowDivider.displayName = "TableRowDivider";
const TableCell = React.forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...rest }, forwardedRef) => {
	return (
		<td
			ref={forwardedRef}
			className={cn(
				"h-16 px-3 transition duration-200 ease-out first:rounded-l-xl last:rounded-r-xl group-hover/row:bg-bg-weak-50",
				className,
			)}
			{...rest}
		/>
	);
});
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...rest }, forwardedRef) => (
	<caption
		ref={forwardedRef}
		className={cn("mt-4 text-paragraph-sm text-text-sub-600", className)}
		{...rest}
	/>
));
TableCaption.displayName = "TableCaption";
export {
	Table as Root,
	TableHeader as Header,
	TableBody as Body,
	TableHead as Head,
	TableRow as Row,
	TableRowDivider as RowDivider,
	TableCell as Cell,
	TableCaption as Caption,
};
````

## File: src/components/ui/divider.tsx
````typescript
import { tv, type VariantProps } from "@/utils/tv";
const DIVIDER_ROOT_NAME = "DividerRoot";
export const dividerVariants = tv({
	base: "relative flex w-full items-center",
	variants: {
		variant: {
			line: "h-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:-translate-y-1/2 before:bg-stroke-soft-200",
			"line-spacing": [
				"h-1",
				"before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:-translate-y-1/2 before:bg-stroke-soft-200",
			],
			"line-text": [
				"gap-2.5",
				"text-subheading-2xs text-text-soft-400",
				"before:h-px before:w-full before:flex-1 before:bg-stroke-soft-200",
				"after:h-px after:w-full after:flex-1 after:bg-stroke-soft-200",
			],
			content: [
				"gap-2.5",
				"before:h-px before:w-full before:flex-1 before:bg-stroke-soft-200",
				"after:h-px after:w-full after:flex-1 after:bg-stroke-soft-200",
			],
			text: [
				"px-2 py-1",
				"text-subheading-xs text-text-soft-400",
			],
			"solid-text": [
				"bg-bg-weak-50 px-5 py-1.5 uppercase",
				"text-subheading-xs text-text-soft-400",
			],
		},
	},
	defaultVariants: {
		variant: "line",
	},
});
function Divider({
	className,
	variant,
	...rest
}: React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof dividerVariants>) {
	return (
		<div
			role="separator"
			className={dividerVariants({ variant, class: className })}
			{...rest}
		/>
	);
}
Divider.displayName = DIVIDER_ROOT_NAME;
export { Divider as Root };
````

## File: src/components/ui/dropdown-menu.tsx
````typescript
"use client"
import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
import { cn } from "@/lib/utils"
function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}
function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}
function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}
function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}
function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    />
  )
}
function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}
function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}
function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}
function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props}
    />
  )
}
export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
````

## File: src/components/ui/form.tsx
````typescript
"use client"
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
const Form = FormProvider
type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}
const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }
  const { id } = itemContext
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
type FormItemContextValue = {
  id: string
}
const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)
function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId()
  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}
function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()
  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}
function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()
  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}
function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField()
  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}
function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children
  if (!body) {
    return null
  }
  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  )
}
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
````

## File: src/components/ui/label.tsx
````typescript
"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const labelVariants = cva(
	"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);
const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
		VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(labelVariants(), className)}
		{...props}
	/>
));
Label.displayName = LabelPrimitive.Root.displayName;
export { Label };
````

## File: src/components/ui/progress.tsx
````typescript
"use client"
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName
export { Progress }
````

## File: src/components/ui/select.tsx
````typescript
"use client"
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { cn } from "@/lib/utils"
function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}
function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}
function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}
function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}
function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-sm font-medium", className)}
      {...props}
    />
  )
}
function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}
function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}
function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}
function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
````

## File: src/components/ui/separator.tsx
````typescript
"use client"
import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName
export { Separator }
````

## File: src/components/ui/skeleton.tsx
````typescript
import { cn } from "@/lib/utils"
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}
export { Skeleton }
````

## File: src/components/ui/sonner.tsx
````typescript
"use client"
import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}
export { Toaster }
````

## File: src/components/ui/spinner.tsx
````typescript
import { cn } from "@/lib/utils";
interface SpinnerProps {
	size?: "sm" | "md" | "lg";
	className?: string;
}
export function Spinner({ size = "md", className }: SpinnerProps) {
	const sizeClasses = {
		sm: "h-4 w-4 border-2",
		md: "h-6 w-6 border-2",
		lg: "h-8 w-8 border-3",
	};
	return (
		<div
			className={cn(
				"animate-spin rounded-full border-t-transparent border-primary",
				sizeClasses[size],
				className,
			)}
		/>
	);
}
````

## File: src/components/ui/switch.tsx
````typescript
"use client"
import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"
function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}
export { Switch }
````

## File: src/components/ui/textarea.tsx
````typescript
"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					"flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Textarea.displayName = "Textarea";
export { Textarea };
````

## File: src/components/ui/tooltip.tsx
````typescript
"use client"
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"
const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
````

## File: src/components/ui/visually-hidden.tsx
````typescript
import * as React from "react";
import { cn } from "@/lib/utils";
interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {}
const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
	({ className, ...props }, ref) => {
		return (
			<span
				ref={ref}
				className={cn(
					"absolute w-px h-px p-0 overflow-hidden whitespace-nowrap border-0",
					"clip-rect-0 [clip-path:inset(50%)]",
					className,
				)}
				{...props}
			/>
		);
	},
);
VisuallyHidden.displayName = "VisuallyHidden";
export { VisuallyHidden };
````

## File: src/components/wallet-ui/index.ts
````typescript
export { WalletUI } from "./wallet-ui";
````

## File: src/components/wallet-ui/index.tsx
````typescript
export * from './WalletUi';
````

## File: src/components/wallet-ui/wallet-ui.stories.tsx
````typescript
import type {Meta, StoryObj} from '@storybook/react'
import {WalletUI} from './wallet-ui'
const meta = {
  title: 'Components/WalletUI',
  component: WalletUI,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WalletUI>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {},
}
export const Mobile: Story = {
  parameters: {
    viewport: {defaultViewport: 'mobile1'},
  },
}
export const Tablet: Story = {
  parameters: {
    viewport: {defaultViewport: 'tablet'},
  },
}
export const Desktop: Story = {
  parameters: {
    viewport: {defaultViewport: 'desktop'},
  },
}
````

## File: src/components/wallet-ui/wallet-ui.tsx
````typescript
'use client'
import {motion} from 'framer-motion'
import {CreditCard, Wallet} from 'lucide-react'
const cards = [
  {
    id: 1,
    name: 'Monzo',
    color: '#f76707',
    textColor: 'white',
  },
  {
    id: 2,
    name: 'Revolut',
    color: '#6b46c1',
    textColor: 'white',
  },
  {
    id: 3,
    name: 'Monese',
    color: '#2563eb',
    textColor: 'white',
  },
]
export function WalletUI() {
  return (
    <div className='flex items-center justify-center transform md:scale-100 scale-[0.7] sm:scale-50'>
      <div className='p-4 flex flex-col items-center justify-center'>
        <div className='text-center mb-12 space-y-2'>
          <h2 className='text-4xl md:text-5xl font-bold'>
            All Cards{''}
            <Wallet className='inline-block size-8' />
          </h2>
        </div>
        <div className='relative w-80 aspect-[4/5] bg-gray-900 dark:bg-gray-800 rounded-3xl overflow-hidden'>
          <div className='relative h-full p-6'>
            <div className='absolute bottom-0 z-10 left-0 right-0 h-1/2 rounded-5xl '>
              {}
              <div className='absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 rounded-b-[100px] transform' />
              {}
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='text-gray-400 text-sm'>
                    {cards.length} cards
                  </span>
                  <span className='text-gray-400'>Wallet Balance</span>
                </div>
                <div className='text-white text-4xl font-bold'>$1,846.00</div>
              </div>
            </div>
            {}
            <div className='relative h-48 mb-8'>
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className='absolute w-full h-48 rounded-2xl p-6 flex flex-col justify-between'
                  initial={{y: index * 20}}
                  animate={{y: index * 40}}
                  style={{
                    zIndex: cards.length + index,
                    backgroundColor: card.color,
                    color: card.textColor,
                  }}
                  whileHover={{y: index * 20 - 10}}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <div className='flex justify-between items-start'>
                    <span className='text-xl font-semibold'>{card.name}</span>
                    <CreditCard className='h-6 w-6' />
                  </div>
                  <div className='text-sm opacity-80'>**** **** **** 1234</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
````

## File: src/components/button-drawer.tsx
````typescript
import {Sheet} from '@silk-hq/components'
import './BottomSheet.css'
const BottomSheet = () => (
  <Sheet.Root license='commercial'>
    <Sheet.Trigger>Open</Sheet.Trigger>
    <Sheet.Portal>
      <Sheet.View className='BottomSheet-view' nativeEdgeSwipePrevention={true}>
        <Sheet.Backdrop themeColorDimming='auto' />
        <Sheet.Content className='BottomSheet-content'>
          <Sheet.BleedingBackground className='BottomSheet-bleedingBackground' />
          Some content
        </Sheet.Content>
      </Sheet.View>
    </Sheet.Portal>
  </Sheet.Root>
)
export {BottomSheet}
````

## File: src/components/logo.tsx
````typescript
import Image from "next/image";
export const Logo = () => {
	return (
		<div>
			<Image src="/logo.png" alt="logo" width={100} height={100} />
		</div>
	);
};
````

## File: src/components/UserButton.tsx
````typescript
import { UserButton as ClerkUserButton } from "@clerk/nextjs";
export function UserButton() {
  return (
    <ClerkUserButton afterSignOutUrl="/" />
  );
}
````

## File: src/context/style-wrapper.tsx
````typescript
'use client'
import {useMediaQuery} from 'usehooks-ts'
export const StyleWrapper = ({children}: {children: React.ReactNode}) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div
      id='app'
      className='fixed top-0 left-0 right-0 z-10 w-screen overflow-x-hidden px-safe py-safe'
      style={{
        height: isMobile ? '100vh' : 'calc(100vh - 80px)',
        overflowY: isMobile ? 'auto' : 'scroll',
      }}
    >
      {children}
    </div>
  )
}
````

## File: src/db/models/achievements/achievements.ts
````typescript
import { and, eq } from "drizzle-orm";
import { db } from "../../db";
import { achievements } from "../../schema";
export const getAchievements = async () => {
	return await db.select().from(achievements);
};
export const getAchievementById = async (id: bigint) => {
	return await db
		.select()
		.from(achievements)
		.where(eq(achievements.id, id))
		.limit(1);
};
export const getAchievementsByUserId = async (userId: bigint) => {
	return await db
		.select()
		.from(achievements)
		.where(eq(achievements.userId, userId));
};
export const getAchievementsByType = async (type: string) => {
	return await db
		.select()
		.from(achievements)
		.where(eq(achievements.type, type));
};
export const getUserAchievementByType = async (
	userId: bigint,
	type: string,
) => {
	return await db
		.select()
		.from(achievements)
		.where(and(eq(achievements.userId, userId), eq(achievements.type, type)))
		.limit(1);
};
export const createAchievement = async (data: {
	userId: bigint;
	type: string;
	data?: Record<string, any>;
	unlockedAt?: Date;
}) => {
	return await db.insert(achievements).values(data).returning();
};
export const updateAchievement = async (
	id: bigint,
	data: Partial<{
		data: Record<string, any>;
		unlockedAt: Date;
	}>,
) => {
	return await db
		.update(achievements)
		.set(data)
		.where(eq(achievements.id, id))
		.returning();
};
export const deleteAchievement = async (id: bigint) => {
	return await db
		.delete(achievements)
		.where(eq(achievements.id, id))
		.returning();
};
````

## File: src/db/models/achievements/index.ts
````typescript
export * from "./achievements";
````

## File: src/db/models/leaderboard/leaderboard.ts
````typescript
"use server";
import { sql } from "drizzle-orm";
import { db } from "../../db";
import { punchCards, users, restaurants } from "../../schema";
import type {
	UserLeaderboardEntry,
	RestaurantLeaderboardEntry,
} from "@/types/api";
export const getTopUsersByPunchCardCount = async (
	limit = 10,
): Promise<UserLeaderboardEntry[]> => {
	const result = await db.execute(sql`
    SELECT
      u.id as "userId",
      u.name as "userName",
      COUNT(pc.id) as "punchCardCount",
      RANK() OVER (ORDER BY COUNT(pc.id) DESC) as "rank"
    FROM
      ${users} u
    JOIN
      ${punchCards} pc ON u.id = pc.user_id
    GROUP BY
      u.id, u.name
    ORDER BY
      "punchCardCount" DESC
    LIMIT ${limit}
  `);
	return result as unknown as UserLeaderboardEntry[];
};
/**
 * Get popular restaurants by punch card count
 */
export const getPopularRestaurantsByPunchCardCount = async (
	limit = 10,
): Promise<RestaurantLeaderboardEntry[]> => {
	const result = await db.execute(sql`
    SELECT
      r.id as "restaurantId",
      r.name as "restaurantName",
      r.image_url as "imageUrl",
      COUNT(pc.id) as "punchCardCount",
      RANK() OVER (ORDER BY COUNT(pc.id) DESC) as "rank"
    FROM
      ${restaurants} r
    JOIN
      ${punchCards} pc ON r.id = pc.restaurant_id
    GROUP BY
      r.id, r.name, r.image_url
    ORDER BY
      "punchCardCount" DESC
    LIMIT ${limit}
  `);
	return result as unknown as RestaurantLeaderboardEntry[];
};
````

## File: src/db/models/point-balances/index.ts
````typescript
export * from "./point-balances";
````

## File: src/db/models/point-balances/point-balances.ts
````typescript
import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { pointBalances } from "@/db/schema";
export const getPointBalances = async () => {
	return await db.select().from(pointBalances);
};
export const getPointBalanceById = async (id: bigint) => {
	return await db
		.select()
		.from(pointBalances)
		.where(eq(pointBalances.id, id))
		.limit(1);
};
export const getPointBalanceByUserId = async (userId: bigint) => {
	return await db
		.select()
		.from(pointBalances)
		.where(eq(pointBalances.userId, userId))
		.limit(1);
};
export const createPointBalance = async (data: {
	userId: bigint;
	points?: number;
}) => {
	return await db.insert(pointBalances).values(data).returning();
};
export const updatePointBalance = async (
	id: bigint,
	data: Partial<{
		points: number;
	}>,
) => {
	return await db
		.update(pointBalances)
		.set(data)
		.where(eq(pointBalances.id, id))
		.returning();
};
export const adjustPointBalance = async (
	userId: bigint,
	adjustment: number,
) => {
	const [balance] = await getPointBalanceByUserId(userId);
	if (!balance) {
		return await createPointBalance({
			userId,
			points: Math.max(0, adjustment),
		});
	}
	const newPoints = Math.max(0, balance.points + adjustment);
	return await db
		.update(pointBalances)
		.set({
			points: newPoints,
			updatedAt: new Date(),
		})
		.where(eq(pointBalances.id, balance.id))
		.returning();
};
export const deletePointBalance = async (id: bigint) => {
	return await db
		.delete(pointBalances)
		.where(eq(pointBalances.id, id))
		.returning();
};
````

## File: src/db/models/point-transfers/index.ts
````typescript
export * from "./point-transfers";
````

## File: src/db/models/point-transfers/point-transfers.ts
````typescript
import { eq, or } from "drizzle-orm";
import { db } from "@/db/db";
import { pointTransfers } from "@/db/schema";
export const getPointTransfers = async () => {
	return await db.select().from(pointTransfers);
};
export const getPointTransferById = async (id: bigint) => {
	return await db
		.select()
		.from(pointTransfers)
		.where(eq(pointTransfers.id, id))
		.limit(1);
};
export const getPointTransfersByUserId = async (userId: bigint) => {
	return await db
		.select()
		.from(pointTransfers)
		.where(
			or(
				eq(pointTransfers.fromUserId, userId),
				eq(pointTransfers.toUserId, userId),
			),
		);
};
export const getSentPointTransfers = async (fromUserId: bigint) => {
	return await db
		.select()
		.from(pointTransfers)
		.where(eq(pointTransfers.fromUserId, fromUserId));
};
export const getReceivedPointTransfers = async (toUserId: bigint) => {
	return await db
		.select()
		.from(pointTransfers)
		.where(eq(pointTransfers.toUserId, toUserId));
};
export const getPointTransfersByStatus = async (status: string) => {
	return await db
		.select()
		.from(pointTransfers)
		.where(eq(pointTransfers.status, status));
};
export const createPointTransfer = async (data: {
	fromUserId: bigint;
	toUserId: bigint;
	points: number;
	message?: string;
	status: string;
}) => {
	return await db.insert(pointTransfers).values(data).returning();
};
export const updatePointTransfer = async (
	id: bigint,
	data: Partial<{
		status: string;
		message: string;
	}>,
) => {
	return await db
		.update(pointTransfers)
		.set(data)
		.where(eq(pointTransfers.id, id))
		.returning();
};
export const deletePointTransfer = async (id: bigint) => {
	return await db
		.delete(pointTransfers)
		.where(eq(pointTransfers.id, id))
		.returning();
};
````

## File: src/db/models/prize-redemptions/index.ts
````typescript
export * from "./prize-redemptions";
````

## File: src/db/models/prize-redemptions/prize-redemptions.ts
````typescript
import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { prizeRedemptions } from "@/db/schema";
export const getPrizeRedemptions = async () => {
	return await db.select().from(prizeRedemptions);
};
export const getPrizeRedemptionById = async (id: bigint) => {
	return await db
		.select()
		.from(prizeRedemptions)
		.where(eq(prizeRedemptions.id, id))
		.limit(1);
};
export const getPrizeRedemptionsByUserId = async (userId: bigint) => {
	return await db
		.select()
		.from(prizeRedemptions)
		.where(eq(prizeRedemptions.userId, userId));
};
export const getPrizeRedemptionsByPrizeId = async (prizeId: bigint) => {
	return await db
		.select()
		.from(prizeRedemptions)
		.where(eq(prizeRedemptions.prizeId, prizeId));
};
export const getPrizeRedemptionsByPunchCardId = async (punchCardId: bigint) => {
	return await db
		.select()
		.from(prizeRedemptions)
		.where(eq(prizeRedemptions.punchCardId, punchCardId));
};
export const getPrizeRedemptionsByStatus = async (status: string) => {
	return await db
		.select()
		.from(prizeRedemptions)
		.where(eq(prizeRedemptions.status, status));
};
export const createPrizeRedemption = async (data: {
	userId: bigint;
	prizeId: bigint;
	punchCardId: bigint;
	status: string;
	redeemedAt?: Date;
	expiresAt?: Date;
}) => {
	return await db.insert(prizeRedemptions).values(data).returning();
};
export const updatePrizeRedemption = async (
	id: bigint,
	data: Partial<{
		status: string;
		redeemedAt: Date | null;
		expiresAt: Date | null;
	}>,
) => {
	return await db
		.update(prizeRedemptions)
		.set(data)
		.where(eq(prizeRedemptions.id, id))
		.returning();
};
export const deletePrizeRedemption = async (id: bigint) => {
	return await db
		.delete(prizeRedemptions)
		.where(eq(prizeRedemptions.id, id))
		.returning();
};
````

## File: src/db/models/prizes/index.ts
````typescript
export * from "./prizes";
````

## File: src/db/models/prizes/prizes.ts
````typescript
import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { prizes } from "@/db/schema";
export const getPrizes = async () => {
	return await db.select().from(prizes);
};
export const getPrizeById = async (id: bigint) => {
	return await db.select().from(prizes).where(eq(prizes.id, id)).limit(1);
};
export const getPrizesByRestaurantId = async (restaurantId: bigint) => {
	return await db
		.select()
		.from(prizes)
		.where(eq(prizes.restaurantId, restaurantId));
};
export const getAvailablePrizes = async () => {
	return await db.select().from(prizes).where(eq(prizes.available, true));
};
export const createPrize = async (data: {
	name: string;
	description: string;
	imageUrl: string;
	type: string;
	restaurantId: bigint;
	requiredPunches: number;
	available?: boolean;
	quantity?: number;
	rules?: Record<string, any>;
}) => {
	return await db.insert(prizes).values(data).returning();
};
export const updatePrize = async (
	id: bigint,
	data: Partial<{
		name: string;
		description: string;
		imageUrl: string;
		type: string;
		requiredPunches: number;
		available: boolean;
		quantity: number;
		rules: Record<string, any>;
	}>,
) => {
	return await db.update(prizes).set(data).where(eq(prizes.id, id)).returning();
};
export const decrementPrizeQuantity = async (id: bigint) => {
	const [prize] = await getPrizeById(id);
	if (!prize || prize.quantity <= 0) return null;
	const newQuantity = prize.quantity - 1;
	const available = newQuantity > 0;
	return await db
		.update(prizes)
		.set({
			quantity: newQuantity,
			available,
		})
		.where(eq(prizes.id, id))
		.returning();
};
export const deletePrize = async (id: bigint) => {
	return await db.delete(prizes).where(eq(prizes.id, id)).returning();
};
````

## File: src/db/models/punch-cards/index.ts
````typescript
export * from "./punch-cards";
````

## File: src/db/models/raffle-entries/index.ts
````typescript
export * from "./raffle-entries";
````

## File: src/db/models/raffle-entries/raffle-entries.ts
````typescript
import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { raffleEntries } from "@/db/schema";
export const getRaffleEntries = async () => {
	return await db.select().from(raffleEntries);
};
export const getRaffleEntryById = async (id: bigint) => {
	return await db
		.select()
		.from(raffleEntries)
		.where(eq(raffleEntries.id, id))
		.limit(1);
};
export const getRaffleEntriesByUserId = async (userId: bigint) => {
	return await db
		.select()
		.from(raffleEntries)
		.where(eq(raffleEntries.userId, userId));
};
export const getRaffleEntriesByPunchCardId = async (punchCardId: bigint) => {
	return await db
		.select()
		.from(raffleEntries)
		.where(eq(raffleEntries.punchCardId, punchCardId));
};
export const createRaffleEntry = async (data: {
	userId: bigint;
	punchCardId: bigint;
}) => {
	return await db.insert(raffleEntries).values(data).returning();
};
export const deleteRaffleEntry = async (id: bigint) => {
	return await db
		.delete(raffleEntries)
		.where(eq(raffleEntries.id, id))
		.returning();
};
````

## File: src/db/models/restaurants/index.ts
````typescript
export * from "./restaurants";
````

## File: src/db/models/users/index.ts
````typescript
export * from "./users";
````

## File: src/db/models/index.ts
````typescript
export * from "./users/users";
export * from "./restaurants/restaurants";
export * from "./punch-cards/punch-cards";
export * from "./achievements/achievements";
export * from "./point-balances/point-balances";
export * from "./point-transfers/point-transfers";
export * from "./prizes/prizes";
export * from "./prize-redemptions/prize-redemptions";
export * from "./raffle-entries/raffle-entries";
````

## File: src/db/index.ts
````typescript
export * from "./models";
export * from "./schema";
export * from "./db";
````

## File: src/db/migrate.ts
````typescript
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv/config';
const connectionString = process.env.DATABASE_URL!;
const sql = postgres(connectionString);
export const db = drizzle(sql);
const main = async () => {
  console.log('Creating migrations table...');
  await sql.unsafe(`
    CREATE SCHEMA IF NOT EXISTS drizzle;
    CREATE TABLE IF NOT EXISTS drizzle.__drizzle_migrations (
      id SERIAL PRIMARY KEY,
      hash text NOT NULL,
      created_at timestamp with time zone DEFAULT now()
    );
  `);
  console.log('Migrations table created.');
  await sql.end();
  process.exit(0);
};
main().catch((err) => {
  console.error('Error creating migrations table:', err);
  process.exit(1);
});
````

## File: src/db/supabase.ts
````typescript
import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error("Missing Supabase environment variables");
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	realtime: {
		params: {
			eventsPerSecond: 10,
		},
	},
});
export async function getAuthenticatedSupabaseClient() {
	const { getToken } = auth();
	const supabaseToken = await getToken({ template: "supabase" });
	return createClient(supabaseUrl, supabaseAnonKey, {
		global: {
			headers: { Authorization: `Bearer ${supabaseToken}` },
		},
		realtime: {
			params: {
				eventsPerSecond: 10,
			},
		},
	});
}
export function createClerkSupabaseClient(
	getToken: () => Promise<string | null>,
) {
	return createClient(supabaseUrl, supabaseAnonKey, {
		global: {
			fetch: async (url, options = {}) => {
				const token = await getToken();
				const headers = new Headers(options?.headers);
				if (token) {
					headers.set("Authorization", `Bearer ${token}`);
				}
				return fetch(url, {
					...options,
					headers,
				});
			},
		},
		realtime: {
			params: {
				eventsPerSecond: 10,
			},
		},
	});
}
````

## File: src/features/deals/index.ts
````typescript
export * from "./DealsList";
````

## File: src/features/restaurants/AdminRestaurantSearchBar.tsx
````typescript
import type { ChangeEvent } from "react";
import { Search, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import type { SortOption } from "@/hooks/useRestaurantSearch";
export interface AdminRestaurantSearchBarProps {
	searchTerm: string;
	onSearchChange: (term: string) => void;
	sortOption: SortOption;
	onSortChange: (option: SortOption) => void;
	className?: string;
}
export function AdminRestaurantSearchBar({
	searchTerm,
	onSearchChange,
	sortOption,
	onSortChange,
	className = "",
}: AdminRestaurantSearchBarProps) {
	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		onSearchChange(e.target.value);
	};
	const handleSortChange = (value: string) => {
		onSortChange(value as SortOption);
	};
	return (
		<div className={`flex flex-col md:flex-row gap-3 w-full mb-6 ${className}`}>
			<div className="relative flex-grow">
				<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
				<Input
					type="text"
					placeholder="Search restaurants by name, description, or address..."
					value={searchTerm}
					onChange={handleSearchChange}
					className="pl-8 w-full"
				/>
			</div>
			<div className="flex items-center gap-2">
				<ArrowUpDown className="h-4 w-4 text-gray-500" />
				<Select value={sortOption} onValueChange={handleSortChange}>
					<SelectTrigger className="w-[160px]">
						<SelectValue placeholder="Sort by" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="name-asc">Name (A-Z)</SelectItem>
						<SelectItem value="name-desc">Name (Z-A)</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
````

## File: src/features/restaurants/index.ts
````typescript
export { RestaurantCard } from "./RestaurantCard";
export { RestaurantsList, RestaurantsLoading } from "./RestaurantList";
export { RestaurantSearchBar } from "./RestaurantSearchBar";
export { AdminRestaurantSearchBar } from "./AdminRestaurantSearchBar";
````

## File: src/features/restaurants/Restaurant.tsx
````typescript
import { getUserRestaurantPunchCard } from "@/db/models/punch-cards/punch-cards";
import { getRestaurantByIdWithPrizes } from "@/db/models/restaurants/restaurants";
import { getUserByClerkId } from "@/db/models/users/users";
import { RestaurantDetail } from "@/features/restaurants/restaurant-detail/RestaurantDetail";
import { RestaurantLoading } from "@/features/restaurants/RestaurantLoading";
import { auth } from "@clerk/nextjs/server";
import type { Suspense } from "react";
export async function Restaurant({ params }: { params: { id: string } }) {
	const { id } = await params;
	const restaurant = id ? await getRestaurantByIdWithPrizes(BigInt(id)) : null;
	const { userId } = await auth();
	const user = userId ? await getUserByClerkId(userId) : null;
	console.log("🚀 ~ restaurant ~ restaurant:", restaurant);
	const punchCard =
		user && restaurant
			? await getUserRestaurantPunchCard(
					BigInt(user?.id),
					BigInt(restaurant?.id),
				)
			: null;
	return (
		<div className="container mx-auto px-4 py-8">
			{
}
			{restaurant && (
				<RestaurantDetail
					restaurant={restaurant}
					user={user}
					userPunchCard={punchCard}
				/>
			)}
		</div>
	);
}
````

## File: src/features/restaurants/RestaurantLoading.tsx
````typescript
export function RestaurantLoading() {
	return (
		<div className="animate-pulse">
			<div className="h-64 bg-gray-200 w-full rounded-lg mb-8" />
			<div className="h-8 bg-gray-200 w-1/2 mb-4" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-3/4 mb-8" />
			<div className="h-6 bg-gray-200 w-1/4 mb-4" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{[...Array(3)].map((_, i) => (
					<div key={i} className="bg-gray-200 h-40 rounded-lg" />
				))}
			</div>
		</div>
	);
}
````

## File: src/features/restaurants/UserFacingRestaurantDetail.tsx
````typescript
import { getUserRestaurantPunchCard } from "@/db/models/punch-cards/punch-cards";
import {
	getRestaurantByIdWithAll,
	getRestaurantByIdWithPrizesAndDeals,
} from "@/db/models/restaurants/restaurants";
import { getUserByClerkId } from "@/db/models/users/users";
import { RestaurantDetail } from "@/features/restaurants/restaurant-detail/RestaurantDetail";
import { RestaurantLoading } from "@/features/restaurants/RestaurantLoading";
import { auth } from "@clerk/nextjs/server";
import type { Suspense } from "react";
export async function UserFacingRestaurantDetail({
	params,
}: {
	params: { id: string };
}) {
	const { id } = await params;
	const restaurant = id
		? await getRestaurantByIdWithPrizesAndDeals(BigInt(id))
		: null;
	const { userId } = await auth();
	const user = userId ? await getUserByClerkId(userId) : null;
	console.log("🚀 ~ restaurant ~ restaurant:", restaurant);
	const punchCard =
		user && restaurant
			? await getUserRestaurantPunchCard(
					BigInt(user?.id),
					BigInt(restaurant?.id),
				)
			: null;
	return (
		<div className="container mx-auto px-4 py-8">
			{
}
			{restaurant && (
				<RestaurantDetail
					restaurant={restaurant}
					user={user}
					userPunchCard={punchCard}
				/>
			)}
		</div>
	);
}
````

## File: src/features/users/GetUserPunchCard.tsx
````typescript
"use client";
import { getUserRestaurantPunchCard } from "@/db/models/punch-cards/punch-cards";
import { UserPunchCard } from "@/features/users/UserPunchCard";
import type { PunchCard, Restaurant } from "@/types/db";
import { use, useEffect, useState } from "react";
export const GetUserRestaurantPunchCard = ({
	restaurant,
	userId,
}: { restaurant: Restaurant; userId: bigint }) => {
	const [punchCard, setPunchCard] = useState<PunchCard | null>(null);
	console.log("🚀 ~ userId:", userId);
	console.log("🚀 ~ restaurant:", restaurant);
	useEffect(() => {}, [userId, restaurant.id]);
	console.log("🚀 ~ punchCard:", punchCard);
	if (!punchCard || !punchCard.length) {
		return null;
	}
	return <UserPunchCard restaurant={restaurant} punchCard={punchCard} />;
};
````

## File: src/features/users/share-punch-menu.tsx
````typescript
'use client'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {
  FacebookIcon,
  Instagram,
  InstagramIcon,
  Share,
  TwitterIcon,
} from 'lucide-react'
export function SharePunchMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selected, setSelected] = useState<any | null>(null)
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  useEffect(() => {
    if (selected && step === 2) {
      const timer = setTimeout(() => {
        setStep(1)
        setTimeout(() => {
          setSelected(null)
        }, 300)
      }, 1300)
      return () => clearTimeout(timer)
    }
  }, [selected, step])
  const social = [
    {
      name: 'Facebook',
      icon: () => <FacebookIcon />,
      url: 'https://www.facebook.com/sharer/sharer.php?u=https://www.google.com',
    },
    {
      name: 'Twitter',
      icon: () => <TwitterIcon />,
      url: 'https://twitter.com/intent/tweet?url=https://www.google.com',
    },
    {
      name: 'Instagram',
      icon: () => <Instagram />,
      url: 'https://www.instagram.com/sharer/sharer.php?u=https://www.google.com',
    },
    {
      name: 'TikTok',
      icon: () => (
        <Image src='/tiktok.png' alt='TikTok' width={24} height={24} />
      ),
      url: 'https://www.tiktok.com/sharer/sharer.php?u=https://www.google.com',
    },
  ]
  return (
    <div
      className='max-w-xs w-full flex items-center justify-center h-min absolute bottom-[140px] z-50 right-[-25px]'
      style={{justifySelf: 'middle', alignSelf: 'middle'}}
    >
      <div
        className='size-14 rounded-xl bg-gray-900 cursor-pointer flex flex-col items-start justify-start overflow-hidden relative'
        onClick={() => setOpen(true)}
      >
        <motion.div
          className='size-full flex items-center justify-center shrink-0 duration-300 transition-all'
          style={{
            y: step === 2 ? -56 : 0,
          }}
        >
          <Share className='text-white' size={30} />
        </motion.div>
        <motion.div
          className='size-full flex items-center justify-center shrink-0 duration-300 transition-all relative'
          style={{
            y: step === 2 ? -56 : 0,
          }}
        >
          <img
            src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${selected?.name}`}
            alt={selected?.name}
            className='rounded-full size-10 z-10'
          />
          <div
            className='size-full absolute left-0 right-0 bottom-0 bg-green-500 duration-300 transition-tranform origin-bottom'
            style={{
              transform: `scaleY(${step === 2 ? 1 : 0})`,
              transitionDelay: step === 2 ? '0.5s' : '0s',
            }}
          />
        </motion.div>
      </div>
      <AnimatePresence mode='wait'>
        {open && !selected && (
          <div className='absolute inset-0 size-full flex items-center justify-center'>
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 20}}
              className='relative w-full bg-[#EEF1F6] p-2 rounded-[30px]'
            >
              {social.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  className='relative flex items-center justify-start p-3 cursor-pointer rounded-3xl'
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    setOpen(false)
                    setSelected(platform)
                    setTimeout(() => {
                      setStep(2)
                    }, 300)
                  }}
                >
                  <motion.div className='flex items-center justify-start gap-3 relative z-[2]'>
                    <motion.div
                      className='flex relativeitems-center justify-center size-10 overflow-hidden bg-white duration-300 transition-all'
                      style={{
                        borderRadius: hoveredIndex === index ? 12 : 20,
                        scale: hoveredIndex === index ? 1.2 : 1,
                        marginLeft: hoveredIndex === index ? -20 : 0,
                      }}
                    >
                      {platform.icon()}
                    </motion.div>
                    <motion.span
                      className='text-lg relative duration-300 transition-all'
                      style={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        marginLeft: hoveredIndex === index ? 8 : 0,
                      }}
                    >
                      {platform.name}
                    </motion.span>
                  </motion.div>
                  {hoveredIndex === index && (
                    <div className='flex absolute h-[105%] w-[115%] left-1/2 -translate-x-1/2 items-center justify-center'>
                      <motion.div
                        className='size-full inset-0 bg-white rounded-2xl shadow-sm border'
                        layoutId='hovered'
                      ></motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
````

## File: src/hooks/use-handle-bulk-qr-code.tsx
````typescript
"use client";
import { useHandleQRCode } from "./use-handle-qr-code";
import type { Restaurant } from "@/types/db";
export const useHandleBulkQRCode = () => {
	return useHandleQRCode({ mode: "bulk" });
};
````

## File: src/hooks/use-handle-qr-code.tsx
````typescript
"use client";
import {
	saveQRCodeUrl,
	saveBulkQRCodeUrls,
} from "@/app/admin/restaurants/actions";
import type { Restaurant } from "@/types/db";
import { useRef, useState, useCallback } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
type QRCodeResult = {
	restaurantId: string;
	success: boolean;
	qrCodeDataUrl?: string;
};
type UseHandleQRCodeProps =
	| { restaurant: Restaurant; mode: "single" }
	| { restaurants?: Restaurant[]; mode: "bulk" };
export const useHandleQRCode = (props: UseHandleQRCodeProps) => {
	const [generating, setGenerating] = useState(false);
	const [saving, setSaving] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);
	const qrRef = useRef<HTMLDivElement>(null);
	const [selectedRestaurants, setSelectedRestaurants] = useState<Restaurant[]>(
		[],
	);
	const [progress, setProgress] = useState(0);
	const [results, setResults] = useState<QRCodeResult[]>([]);
	const getRestaurantId = useCallback(() => {
		if (props.mode === "single") {
			return props.restaurant.id;
		}
		return null;
	}, [props]);
	const qrCodeValue = useCallback((restaurantId: string | number | bigint) => {
		return `/api/restaurants/${restaurantId}/scan`;
	}, []);
	const generateQRCodeDataUrl = useCallback(
		(restaurantId: string | number | bigint) => {
			const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" style="background-color: white">
      <rect width="200" height="200" fill="white" />
      <path d="M0,0 L200,0 L200,200 L0,200 Z" fill="white" />
      <path d="M40,40 L50,40 L50,50 L40,50 Z M60,40 L70,40 L70,50 L60,50 Z M80,40 L90,40 L90,50 L80,50 Z M100,40 L110,40 L110,50 L100,50 Z M120,40 L130,40 L130,50 L120,50 Z M140,40 L150,40 L150,50 L140,50 Z M160,40 L170,40 L170,50 L160,50 Z" fill="black" />
      <!-- QR code pattern for ${qrCodeValue(restaurantId)} -->
    </svg>`;
			return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
		},
		[qrCodeValue],
	);
	const extractSvgData = useCallback(
		async (svgElement?: SVGElement | null, dataUrl?: string | null) => {
			if (dataUrl) {
				try {
					if (dataUrl.startsWith("data:")) {
						const dataUrlParts = dataUrl.split(",");
						if (dataUrlParts.length === 2) {
							const base64Data = dataUrlParts[1];
							if (dataUrl.includes(";base64,")) {
								return atob(base64Data);
							}
							return decodeURIComponent(base64Data);
						}
					}
				} catch (dataUrlError) {
					console.warn("Error extracting SVG from data URL:", dataUrlError);
				}
			}
			if (svgElement) {
				const clonedSvg = svgElement.cloneNode(true) as SVGElement;
				clonedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
				if (!clonedSvg.hasAttribute("width")) {
					clonedSvg.setAttribute("width", "200");
				}
				if (!clonedSvg.hasAttribute("height")) {
					clonedSvg.setAttribute("height", "200");
				}
				clonedSvg.setAttribute("style", "background-color: white");
				return new XMLSerializer().serializeToString(clonedSvg);
			}
			throw new Error("No SVG source available");
		},
		[],
	);
	const handleGenerate = useCallback(() => {
		if (props.mode !== "single") return;
		setGenerating(true);
		setError(null);
		setSuccess(false);
	}, [props.mode]);
	const handleCancel = useCallback(() => {
		if (props.mode !== "single") return;
		setGenerating(false);
		setError(null);
	}, [props.mode]);
	const handleDownload = useCallback(() => {
		if (props.mode !== "single") return;
		if (!qrCodeDataUrl && !qrRef.current) {
			setError("No QR code found to download");
			return;
		}
		try {
			let dataUrl = qrCodeDataUrl;
			if (!dataUrl && qrRef.current) {
				const svgElement = qrRef.current.querySelector("svg");
				if (!svgElement) {
					throw new Error("QR code SVG not found");
				}
				const svgData = new XMLSerializer().serializeToString(svgElement);
				const encodedData = encodeURIComponent(svgData);
				dataUrl = `data:image/svg+xml;charset=utf-8,${encodedData}`;
			}
			if (!dataUrl) {
				throw new Error("Failed to generate QR code data URL");
			}
			const isSafari = /^((?!chrome|android).)*safari/i.test(
				navigator.userAgent,
			);
			const filename =
				props.mode === "single"
					? `${props.restaurant.name.replace(/\s+/g, "-").toLowerCase()}-qrcode.svg`
					: "qrcode.svg";
			if (isSafari) {
				const newTab = window.open();
				if (newTab) {
					newTab.document.write(`
            <html>
              <head>
                <title>Download QR Code</title>
                <style>
                  body {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    font-family: system-ui, sans-serif;
                  }
                  .instructions {
                    margin: 20px;
                    max-width: 400px;
                    text-align: center;
                  }
                </style>
              </head>
              <body>
                <img src="${dataUrl}" alt="QR Code" width="300" height="300" />
                <div class="instructions">
                  <p>Right-click or long-press the image and select "Save Image As" to download.</p>
                  <p>Filename: ${filename}</p>
                </div>
              </body>
            </html>
          `);
					newTab.document.close();
				} else {
					throw new Error(
						"Could not open download window. Please check your popup blocker settings.",
					);
				}
				return;
			}
			const link = document.createElement("a");
			link.href = dataUrl;
			link.download = filename;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (err) {
			console.error("Download failed:", err);
			setError(
				err instanceof Error ? err.message : "Failed to download QR code",
			);
		}
	}, [props, qrCodeDataUrl]);
	const handleSave = useCallback(async () => {
		if (props.mode !== "single") return;
		try {
			setSaving(true);
			setError(null);
			if (!qrRef.current) {
				throw new Error("QR code container not found");
			}
			const svgElement = qrRef.current.querySelector("svg");
			if (!svgElement) {
				throw new Error("QR code SVG not found");
			}
			const svgData = await extractSvgData(svgElement);
			let dataUrl: string;
			try {
				const blob = new Blob([svgData], { type: "image/svg+xml" });
				dataUrl = await new Promise<string>((resolve, reject) => {
					const reader = new FileReader();
					reader.onload = () => resolve(reader.result as string);
					reader.onerror = reject;
					reader.readAsDataURL(blob);
				});
			} catch (blobError) {
				console.warn(
					"Blob approach failed, falling back to base64:",
					blobError,
				);
				dataUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgData)))}`;
			}
			if (props.mode === "single") {
				const result = await saveQRCodeUrl(
					props.restaurant.id.toString(),
					dataUrl,
				);
				if (result) {
					setSuccess(true);
					setGenerating(false);
					setQrCodeDataUrl(dataUrl);
				} else {
					throw new Error("Failed to save QR code");
				}
			}
		} catch (err) {
			console.error("Save error:", err);
			setError(
				err instanceof Error
					? err.message
					: "An error occurred while saving the QR code",
			);
		} finally {
			setSaving(false);
		}
	}, [props, extractSvgData]);
	const toggleRestaurant = useCallback(
		(restaurant: Restaurant) => {
			if (props.mode !== "bulk") return;
			setSelectedRestaurants((prev) => {
				const isSelected = prev.some((r) => r.id === restaurant.id);
				if (isSelected) {
					return prev.filter((r) => r.id !== restaurant.id);
				}
				return [...prev, restaurant];
			});
		},
		[props.mode],
	);
	const toggleSelectAll = useCallback(
		(restaurants: Restaurant[], select: boolean) => {
			if (props.mode !== "bulk") return;
			if (select) {
				setSelectedRestaurants(restaurants);
			} else {
				setSelectedRestaurants([]);
			}
		},
		[props.mode],
	);
	const handleGenerateAll = useCallback(
		async (restaurants?: Restaurant[]) => {
			if (props.mode !== "bulk") return;
			const restaurantsToProcess = restaurants || selectedRestaurants;
			if (restaurantsToProcess.length === 0) {
				setError("Please select at least one restaurant to generate QR codes");
				return;
			}
			setGenerating(true);
			setError(null);
			setSuccess(false);
			setProgress(0);
			setResults([]);
			try {
				const generatedResults: QRCodeResult[] = [];
				for (let i = 0; i < restaurantsToProcess.length; i++) {
					const restaurant = restaurantsToProcess[i];
					const dataUrl = generateQRCodeDataUrl(restaurant.id);
					generatedResults.push({
						restaurantId: restaurant.id.toString(),
						success: true,
						qrCodeDataUrl: dataUrl,
					});
					setProgress(
						Math.round(((i + 1) / restaurantsToProcess.length) * 100),
					);
				}
				setResults(generatedResults);
				if (restaurants) {
					setSelectedRestaurants(restaurants);
				}
			} catch (error) {
				console.error("Error generating QR codes:", error);
				setError("Failed to generate QR codes");
			}
		},
		[props.mode, selectedRestaurants, generateQRCodeDataUrl],
	);
	const handleSaveAll = useCallback(async () => {
		if (props.mode !== "bulk") return;
		if (results.length === 0) {
			setError("No QR codes have been generated yet");
			return;
		}
		setSaving(true);
		setError(null);
		try {
			const bulkData = results.map((result) => ({
				restaurantId: result.restaurantId,
				qrCodeUrl: result.qrCodeDataUrl || "",
			}));
			// Filter out any entries without data URLs
			const validBulkData = bulkData.filter((data) => data.qrCodeUrl);
			if (validBulkData.length === 0) {
				throw new Error("No valid QR code data to save");
			}
			const saveResult = await saveBulkQRCodeUrls(validBulkData);
			if (saveResult.success) {
				setSuccess(true);
				setResults((prev) =>
					prev.map((item) => {
						const resultItem = saveResult.results.find(
							(r) => r.restaurantId === item.restaurantId,
						);
						return {
							...item,
							success: resultItem ? resultItem.success : false,
						};
					}),
				);
			} else {
				throw new Error("Failed to save QR codes to database");
			}
		} catch (error) {
			console.error("Error saving QR codes:", error);
			setError(
				error instanceof Error
					? error.message
					: "An error occurred while saving QR codes",
			);
		} finally {
			setSaving(false);
		}
	}, [props.mode, results]);
	const handleDownloadAll = useCallback(async () => {
		if (props.mode !== "bulk") return;
		if (results.length === 0) {
			setError("No QR codes available to download");
			return;
		}
		try {
			const zip = new JSZip();
			const qrFolder = zip.folder("qr-codes");
			if (!qrFolder) {
				throw new Error("Failed to create folder in ZIP");
			}
			let successCount = 0;
			const failedItems: string[] = [];
			for (const result of results) {
				if (!result.qrCodeDataUrl) {
					failedItems.push(
						`Missing QR code data for restaurant ID ${result.restaurantId}`,
					);
					continue;
				}
				const restaurant = selectedRestaurants.find(
					(r) => r.id.toString() === result.restaurantId,
				);
				if (!restaurant) {
					failedItems.push(
						`Could not find restaurant data for ID ${result.restaurantId}`,
					);
					continue;
				}
				try {
					const fileName = `${restaurant.name.replace(/\s+/g, "-").toLowerCase()}-qrcode.svg`;
					try {
						const svgData = await extractSvgData(null, result.qrCodeDataUrl);
						qrFolder.file(fileName, svgData);
						successCount++;
					} catch (dataError) {
						try {
							const response = await fetch(result.qrCodeDataUrl);
							const blob = await response.blob();
							qrFolder.file(fileName, blob);
							successCount++;
						} catch (blobError) {
							console.error("Blob approach failed:", blobError);
							failedItems.push(
								`Failed to process ${restaurant.name}: ${blobError instanceof Error ? blobError.message : "Unknown error"}`,
							);
						}
					}
				} catch (itemError) {
					console.error(`Error processing ${restaurant.name}:`, itemError);
					failedItems.push(
						`Error processing ${restaurant.name}: ${itemError instanceof Error ? itemError.message : "Unknown error"}`,
					);
				}
			}
			const content = await zip.generateAsync({ type: "blob" });
			saveAs(content, "restaurant-qr-codes.zip");
			if (successCount === 0) {
				setError(
					"Failed to package any QR codes. Please try generating them again.",
				);
			} else if (failedItems.length > 0) {
				console.warn("Some QR codes could not be packaged:", failedItems);
				setError(
					`Downloaded ${successCount} QR codes. ${failedItems.length} could not be included.`,
				);
			}
		} catch (error) {
			console.error("Error downloading QR codes:", error);
			setError(
				`Failed to download QR codes: ${error instanceof Error ? error.message : "Unknown error"}. Check your browser's download permissions.`,
			);
		}
	}, [props.mode, results, selectedRestaurants, extractSvgData]);
	const handleReset = useCallback(() => {
		if (props.mode !== "bulk") return;
		setSelectedRestaurants([]);
		setGenerating(false);
		setSaving(false);
		setSuccess(false);
		setError(null);
		setProgress(0);
		setResults([]);
	}, [props.mode]);
	if (props.mode === "single") {
		return {
			qrCodeDataUrl,
			qrCodeValue: qrCodeValue(props.restaurant.id),
			handleGenerate,
			handleCancel,
			handleDownload,
			handleSave,
			generating,
			saving,
			success,
			error,
			qrRef,
		};
	} else {
		return {
			selectedRestaurants,
			generating,
			saving,
			success,
			error,
			progress,
			results,
			toggleSelectAll,
			toggleRestaurant,
			handleGenerateAll,
			handleSaveAll,
			handleDownloadAll,
			handleReset,
		};
	}
};
````

## File: src/hooks/use-server-sent-event.tsx
````typescript
"use client";
import { useState, useEffect, useCallback, useRef } from "react";
export type SseMessage = {
	type: string;
	payload: Record<string, unknown>;
};
export function useServerSentEvent(endpoint = "/api/sse") {
	const [isConnected, setIsConnected] = useState(false);
	const [lastMessage, setLastMessage] = useState<SseMessage | null>(null);
	const eventSourceRef = useRef<EventSource | null>(null);
	const messageListenersRef = useRef<((message: SseMessage) => void)[]>([]);
	useEffect(() => {
		if (typeof window === "undefined") return;
		const eventSource = new EventSource(endpoint);
		eventSourceRef.current = eventSource;
		eventSource.onopen = () => {
			setIsConnected(true);
		};
		eventSource.onerror = (error) => {
			console.error("SSE error:", error);
			setIsConnected(false);
			setTimeout(() => {
				eventSource.close();
			}, 5000);
		};
		eventSource.onmessage = (event) => {
			try {
				const message = JSON.parse(event.data) as SseMessage;
				setLastMessage(message);
				for (const listener of messageListenersRef.current) {
					listener(message);
				}
			} catch (error) {
				console.error("Error parsing SSE message:", error);
			}
		};
		return () => {
			eventSource.close();
			setIsConnected(false);
		};
	}, [endpoint]);
	const addMessageListener = useCallback(
		(listener: (message: SseMessage) => void) => {
			messageListenersRef.current.push(listener);
			return () => {
				messageListenersRef.current = messageListenersRef.current.filter(
					(l) => l !== listener,
				);
			};
		},
		[],
	);
	const sendMessage = useCallback(
		async (message: Omit<SseMessage, "id">) => {
			try {
				const response = await fetch(`${endpoint}/send`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(message),
				});
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return await response.json();
			} catch (error) {
				console.error("Error sending message:", error);
				throw error;
			}
		},
		[endpoint],
	);
	return {
		isConnected,
		lastMessage,
		addMessageListener,
		sendMessage,
	};
}
````

## File: src/hooks/use-toast.tsx
````typescript
"use client";
import { useState } from "react";
interface ToastProps {
	title?: string;
	description?: string;
	variant?: "default" | "destructive";
}
interface Toast extends ToastProps {
	id: string;
}
export function useToast() {
	const [toasts, setToasts] = useState<Toast[]>([]);
	const toast = (props: ToastProps) => {
		const id = Date.now().toString();
		setToasts((prevToasts) => [...prevToasts, { ...props, id }]);
		setTimeout(() => {
			setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
		}, 3000);
	};
	return { toast, toasts };
}
````

## File: src/hooks/use-websocket.tsx
````typescript
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
export type WsMessage = {
	type: string;
	payload: Record<string, unknown>;
};
export function useWebSocket() {
	const [isConnected, setIsConnected] = useState(false);
	const socketRef = useRef<WebSocket | null>(null);
	useEffect(() => {
		const wsUrl = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:3001/ws";
		const socket = new WebSocket(wsUrl);
		socketRef.current = socket;
		socket.addEventListener("open", () => {
			setIsConnected(true);
		});
		socket.addEventListener("close", () => {
			setIsConnected(false);
		});
		socket.addEventListener("error", (error) => {
			console.error("WebSocket error:", error);
			setIsConnected(false);
		});
		return () => {
			if (socket.readyState === WebSocket.OPEN) {
				socket.close();
			}
		};
	}, []);
	const sendMessage = useCallback((message: WsMessage) => {
		if (socketRef.current?.readyState === WebSocket.OPEN) {
			socketRef.current.send(JSON.stringify(message));
		} else {
			console.error("WebSocket is not connected");
		}
	}, []);
	return {
		isConnected,
		sendMessage,
		socket: socketRef.current,
	};
}
````

## File: src/hooks/useRestaurantSearch.tsx
````typescript
"use client";
import { useState, useMemo } from "react";
import type { Restaurant } from "@/types/db";
import Fuse from "fuse.js";
import type { FuseResult } from "fuse.js";
export type SortOption = "name-asc" | "name-desc";
interface UseRestaurantSearchProps {
	restaurants: Restaurant[];
	initialSortOption?: SortOption;
	hasDeals?: boolean;
}
interface UseRestaurantSearchResult {
	filteredRestaurants: Restaurant[];
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	sortOption: SortOption;
	setSortOption: (option: SortOption) => void;
	isSearching: boolean;
	hasDeals: boolean;
	setHasDeals: (hasDeals: boolean) => void;
}
export const useRestaurantSearch = ({
	restaurants,
	initialSortOption = "name-asc",
	hasDeals: initialHasDeals = false,
}: UseRestaurantSearchProps): UseRestaurantSearchResult => {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortOption, setSortOption] = useState<SortOption>(initialSortOption);
	const [hasDeals, setHasDeals] = useState<boolean>(initialHasDeals);
	// Initialize Fuse.js for fuzzy search
	const fuse = useMemo(() => {
		return new Fuse(restaurants, {
			keys: ["name", "description", "address"],
			threshold: 0.4,
			includeScore: true,
		});
	}, [restaurants]);
	const filteredRestaurants = useMemo(() => {
		let results = [...restaurants];
		if (hasDeals) {
			results = results.filter(
				(restaurant) => restaurant.deals && restaurant.deals.length > 0,
			);
		}
		if (searchTerm.trim()) {
			const searchResults = fuse.search(searchTerm);
			results = searchResults.map(
				(result: FuseResult<Restaurant>) => result.item,
			);
		}
		return results.sort((a, b) => {
			if (sortOption === "name-asc") {
				return a.name.localeCompare(b.name);
			}
			return b.name.localeCompare(a.name);
		});
	}, [restaurants, searchTerm, sortOption, fuse, hasDeals]);
	const isSearching = searchTerm.trim().length > 0;
	return {
		filteredRestaurants,
		searchTerm,
		setSearchTerm,
		sortOption,
		setSortOption,
		isSearching,
		hasDeals,
		setHasDeals,
	};
};
````

## File: src/lib/constants.ts
````typescript
export const MAX_PUNCH_THRESHOLD = 10;
````

## File: src/lib/csv.ts
````typescript
export function convertToCSV<T extends Record<string, unknown>>(
	data: T[],
	columns?: (keyof T)[],
): string {
	if (!data.length) return "";
	// Determine columns to use - either provided columns or all keys from first object
	const actualColumns = columns || (Object.keys(data[0]) as (keyof T)[]);
	// Create header row
	const headerRow = actualColumns.map((key) => `"${String(key)}"`).join(",");
	// Create data rows
	const rows = data.map((item) => {
		return actualColumns
			.map((key) => {
				const value = item[key];
				// Handle different data types appropriately
				if (value === null || value === undefined) return '""';
				if (typeof value === "object")
					return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
				return `"${String(value).replace(/"/g, '""')}"`;
			})
			.join(",");
	});
	return [headerRow, ...rows].join("\n");
}
export function exportToCSV<T extends Record<string, unknown>>(
	data: T[],
	filename: string,
	columns?: (keyof T)[],
): void {
	const csvContent = convertToCSV(data, columns);
	const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
	const link = document.createElement("a");
	const url = URL.createObjectURL(blob);
	link.setAttribute("href", url);
	link.setAttribute("download", `${filename}.csv`);
	link.style.visibility = "hidden";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
export async function parseCSV<T extends Record<string, unknown>>(
	file: File,
	requiredColumns: string[],
): Promise<T[]> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (event) => {
			try {
				if (!event.target?.result) {
					reject(new Error("Failed to read file"));
					return;
				}
				const csvContent = event.target.result as string;
				const lines = csvContent
					.split(/\r\n|\n/)
					.filter((line) => line.trim() !== "");
				if (lines.length < 2) {
					reject(
						new Error(
							"CSV file must contain a header row and at least one data row",
						),
					);
					return;
				}
				const headers = lines[0]
					.split(",")
					.map((header) => header.replace(/^"(.*)"$/, "$1").trim());
				const missingColumns = requiredColumns.filter(
					(col) => !headers.includes(col),
				);
				if (missingColumns.length > 0) {
					reject(
						new Error(`Missing required columns: ${missingColumns.join(", ")}`),
					);
					return;
				}
				const result: T[] = [];
				for (let i = 1; i < lines.length; i++) {
					const values = parseCSVLine(lines[i]);
					if (values.length !== headers.length) {
						reject(
							new Error(
								`Line ${i + 1} has ${values.length} values but should have ${headers.length}`,
							),
						);
						return;
					}
					const row = {} as Record<string, unknown>;
					headers.forEach((header, index) => {
						row[header] = values[index];
					});
					result.push(row as T);
				}
				resolve(result);
			} catch (error) {
				reject(
					error instanceof Error
						? error
						: new Error("Failed to parse CSV file"),
				);
			}
		};
		reader.onerror = () => {
			reject(new Error("Failed to read file"));
		};
		reader.readAsText(file);
	});
}
function parseCSVLine(line: string): string[] {
	const result: string[] = [];
	let current = "";
	let inQuotes = false;
	for (let i = 0; i < line.length; i++) {
		const char = line[i];
		if (char === '"') {
			if (inQuotes && i < line.length - 1 && line[i + 1] === '"') {
				// Double quotes inside quotes - add a single quote
				current += '"';
				i++; // Skip the next quote
			} else {
				// Toggle quote mode
				inQuotes = !inQuotes;
			}
		} else if (char === "," && !inQuotes) {
			// End of value
			result.push(current.trim());
			current = "";
		} else {
			// Normal character
			current += char;
		}
	}
	// Don't forget the last value
	result.push(current.trim());
	return result.map((val) => val.replace(/^"(.*)"$/, "$1"));
}
````

## File: src/lib/svg-to-data-url.ts
````typescript
export const svgToDataURL = (svg: string): string => {
  if (typeof window === 'undefined') {
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
  } else {
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
  }
};
````

## File: src/stories/Button.stories.ts
````typescript
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
````

## File: src/stories/Button.tsx
````typescript
import React from 'react';
import './button.css';
export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
````

## File: src/stories/Configure.mdx
````
import { Meta } from "@storybook/blocks";
import Image from "next/image";

import Github from "./assets/github.svg";
import Discord from "./assets/discord.svg";
import Youtube from "./assets/youtube.svg";
import Tutorials from "./assets/tutorials.svg";
import Styling from "./assets/styling.png";
import Context from "./assets/context.png";
import Assets from "./assets/assets.png";
import Docs from "./assets/docs.png";
import Share from "./assets/share.png";
import FigmaPlugin from "./assets/figma-plugin.png";
import Testing from "./assets/testing.png";
import Accessibility from "./assets/accessibility.png";
import Theming from "./assets/theming.png";
import AddonLibrary from "./assets/addon-library.png";

export const RightArrow = () => <svg 
    viewBox="0 0 14 14" 
    width="8px" 
    height="14px" 
    style={{ 
      marginLeft: '4px',
      display: 'inline-block',
      shapeRendering: 'inherit',
      verticalAlign: 'middle',
      fill: 'currentColor',
      'path fill': 'currentColor'
    }}
>
  <path d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" />
</svg>

<Meta title="Configure your project" />

<div className="sb-container">
  <div className='sb-section-title'>
    # Configure your project

    Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community.
  </div>
  <div className="sb-section">
    <div className="sb-section-item">
      <Image
        src={Styling}
        alt="A wall of logos representing different styling technologies"
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
      />
      <h4 className="sb-section-item-heading">Add styling and CSS</h4>
      <p className="sb-section-item-paragraph">Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook.</p>
      <a
        href="https://storybook.js.org/docs/configure/styling-and-css/?renderer=react"
        target="_blank"
      >Learn more<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <Image 
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
        src={Context}
        alt="An abstraction representing the composition of data for a component"
      />
      <h4 className="sb-section-item-heading">Provide context and mocking</h4>
      <p className="sb-section-item-paragraph">Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available.</p>
      <a
        href="https://storybook.js.org/docs/writing-stories/decorators/?renderer=react#context-for-mocking"
        target="_blank"
      >Learn more<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <Image 
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }} 
        src={Assets} 
        alt="A representation of typography and image assets" 
      />
      <div>
        <h4 className="sb-section-item-heading">Load assets and resources</h4>
        <p className="sb-section-item-paragraph">To link static files (like fonts) to your projects and stories, use the
        `staticDirs` configuration option to specify folders to load when
        starting Storybook.</p>
        <a
          href="https://storybook.js.org/docs/configure/images-and-assets/?renderer=react"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
    </div>
  </div>
</div>
<div className="sb-container">
  <div className='sb-section-title'>
    # Do more with Storybook

    Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs.
  </div>

  <div className="sb-section">
    <div className="sb-features-grid">
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Docs} 
          alt="A screenshot showing the autodocs tag being set, pointing a docs page being generated" 
        />
        <h4 className="sb-section-item-heading">Autodocs</h4>
        <p className="sb-section-item-paragraph">Auto-generate living,
          interactive reference documentation from your components and stories.</p>
        <a
          href="https://storybook.js.org/docs/writing-docs/autodocs/?renderer=react"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Share} 
          alt="A browser window showing a Storybook being published to a chromatic.com URL" 
        />
        <h4 className="sb-section-item-heading">Publish to Chromatic</h4>
        <p className="sb-section-item-paragraph">Publish your Storybook to review and collaborate with your entire team.</p>
        <a
          href="https://storybook.js.org/docs/sharing/publish-storybook/?renderer=react#publish-storybook-with-chromatic"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={FigmaPlugin} 
          alt="Windows showing the Storybook plugin in Figma" 
        />
        <h4 className="sb-section-item-heading">Figma Plugin</h4>
        <p className="sb-section-item-paragraph">Embed your stories into Figma to cross-reference the design and live
          implementation in one place.</p>
        <a
          href="https://storybook.js.org/docs/sharing/design-integrations/?renderer=react#embed-storybook-in-figma-with-the-plugin"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Testing} 
          alt="Screenshot of tests passing and failing" 
        />
        <h4 className="sb-section-item-heading">Testing</h4>
        <p className="sb-section-item-paragraph">Use stories to test a component in all its variations, no matter how
          complex.</p>
        <a
          href="https://storybook.js.org/docs/writing-tests/?renderer=react"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Accessibility} 
          alt="Screenshot of accessibility tests passing and failing" 
        />
        <h4 className="sb-section-item-heading">Accessibility</h4>
        <p className="sb-section-item-paragraph">Automatically test your components for a11y issues as you develop.</p>
        <a
          href="https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=react"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Theming} 
          alt="Screenshot of Storybook in light and dark mode" 
        />
        <h4 className="sb-section-item-heading">Theming</h4>
        <p className="sb-section-item-paragraph">Theme Storybook's UI to personalize it to your project.</p>
        <a
          href="https://storybook.js.org/docs/configure/theming/?renderer=react"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
    </div>
  </div>
</div>
<div className='sb-addon'>
  <div className='sb-addon-text'>
    <h4>Addons</h4>
    <p className="sb-section-item-paragraph">Integrate your tools with Storybook to connect workflows.</p>
    <a
        href="https://storybook.js.org/addons/"
        target="_blank"
      >Discover all addons<RightArrow /></a>
  </div>
  <div className='sb-addon-img'>
    <Image 
      width={650}
      height={347}
      src={AddonLibrary} 
      alt="Integrate your tools with Storybook to connect workflows." 
    />
  </div>
</div>

<div className="sb-section sb-socials">
    <div className="sb-section-item">
      <Image 
        width={32}
        height={32}
        layout="fixed"
        src={Github} 
        alt="Github logo" 
        className="sb-explore-image"
      />
      Join our contributors building the future of UI development.

      <a
        href="https://github.com/storybookjs/storybook"
        target="_blank"
      >Star on GitHub<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <Image 
        width={33}
        height={32}
        layout="fixed"
        src={Discord} 
        alt="Discord logo" 
        className="sb-explore-image"
      />
      <div>
        Get support and chat with frontend developers.

        <a
          href="https://discord.gg/storybook"
          target="_blank"
        >Join Discord server<RightArrow /></a>
      </div>
    </div>
    <div className="sb-section-item">
      <Image 
        width={32}
        height={32}
        layout="fixed"
        src={Youtube} 
        alt="Youtube logo" 
        className="sb-explore-image"
      />
      <div>
        Watch tutorials, feature previews and interviews.

        <a
          href="https://www.youtube.com/@chromaticui"
          target="_blank"
        >Watch on YouTube<RightArrow /></a>
      </div>
    </div>
    <div className="sb-section-item">
      <Image 
        width={33}
        height={32}
        layout="fixed"
        src={Tutorials} 
        alt="A book" 
        className="sb-explore-image"
      />
      <p>Follow guided walkthroughs on for key workflows.</p>

      <a
          href="https://storybook.js.org/tutorials/"
          target="_blank"
        >Discover tutorials<RightArrow /></a>
    </div>
</div>

<style>
  {`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `}
</style>
````

## File: src/stories/Header.stories.ts
````typescript
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header } from './Header';
const meta = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof meta>;
export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};
export const LoggedOut: Story = {};
````

## File: src/stories/Header.tsx
````typescript
import React from 'react';
import { Button } from './Button';
import './header.css';
type User = {
  name: string;
};
export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}
export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
````

## File: src/stories/Page.stories.ts
````typescript
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Page } from './Page';
const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;
export default meta;
type Story = StoryObj<typeof meta>;
export const LoggedOut: Story = {};
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
````

## File: src/stories/Page.tsx
````typescript
import React from 'react';
import { Header } from './Header';
import './page.css';
type User = {
  name: string;
};
export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();
  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <section className="storybook-page">
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul>
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
            docs
          </a>
          .
        </p>
        <div className="tip-wrapper">
          <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};
````

## File: src/types/index.ts
````typescript
export * from "./db";
export * from "./schemas";
export * from "./api";
export type UserRole = "user" | "restaurant_admin" | "system_admin";
export type AuthUser = {
	id: string;
	clerkId: string;
	name: string;
	email: string;
	role: UserRole;
	restaurantIds?: bigint[];
};
export type ToastType = "success" | "error" | "info" | "warning";
export type Toast = {
	id: string;
	type: ToastType;
	title: string;
	message: string;
	duration?: number;
};
export type SortDirection = "asc" | "desc";
export type SortOption<T extends string = string> = {
	field: T;
	direction: SortDirection;
};
export type FilterOption<T extends string = string> = {
	field: T;
	value: string | number | boolean | null;
	operator?: "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "contains";
};
export type Theme = "light" | "dark" | "system";
export type QRCodeSize = "sm" | "md" | "lg";
export type FeatureFlag = {
	name: string;
	enabled: boolean;
	description?: string;
};
export * from "./db";
````

## File: src/middleware.ts
````typescript
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
export default clerkMiddleware(async (auth, req) => {
	const isProtectedRoute = createRouteMatcher(["/admin(.*)", "/user(.*)"]);
	if (isProtectedRoute(req)) await auth.protect();
});
export const config = {
	matcher: [
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		"/(api|trpc)(.*)",
	],
};
````

## File: src/actions/restaurants.ts
````typescript
"use server";
import { db } from "@/db/db";
import { restaurants } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createRestaurantSchema, restaurantSchema } from "@/types/schemas";
import type { Restaurant } from "@/types/db";
export type RestaurantFormData = z.infer<typeof createRestaurantSchema>;
export async function createRestaurantAction(formData: RestaurantFormData) {
	try {
		const validatedData = createRestaurantSchema.parse(formData);
		await db.insert(restaurants).values(validatedData);
		revalidatePath("/admin/restaurants");
		redirect("/admin/restaurants");
	} catch (error) {
		if (error instanceof z.ZodError) {
			return { success: false, error: error.flatten().fieldErrors };
		}
		return {
			success: false,
			error: { _form: ["Failed to create restaurant"] },
		};
	}
}
export async function updateRestaurantAction(
	id: bigint,
	data: Partial<RestaurantFormData>,
) {
	try {
		const validatedData = z
			.object({
				name: z.string().optional(),
				description: z.string().optional(),
				imageUrl: z.string().url().optional(),
				address: z.string().optional(),
			})
			.parse(data);
		await db
			.update(restaurants)
			.set(validatedData)
			.where(eq(restaurants.id, id));
		revalidatePath("/admin/restaurants");
		return {
			success: true,
			message: "Restaurant updated successfully",
		};
	} catch (error) {
		if (error instanceof z.ZodError) {
			return { success: false, error: error.flatten().fieldErrors };
		}
		return {
			success: false,
			error: { _form: ["Failed to update restaurant"] },
		};
	}
}
export async function deleteRestaurantAction(id: bigint) {
	try {
		await db.delete(restaurants).where(eq(restaurants.id, id));
		revalidatePath("/admin/restaurants");
		return {
			success: true,
			message: "Restaurant deleted successfully",
		};
	} catch (error) {
		return {
			success: false,
			error: { _form: ["Failed to delete restaurant"] },
		};
	}
}
export async function updateRestaurantQRCodeAction(
	id: bigint,
	qrCodeUrl: string,
) {
	try {
		await db
			.update(restaurants)
			.set({ qrCodeUrl })
			.where(eq(restaurants.id, id));
		revalidatePath("/admin/restaurants");
		return {
			success: true,
			message: "QR code updated successfully",
		};
	} catch (error) {
		return {
			success: false,
			error: { _form: ["Failed to update QR code"] },
		};
	}
}
type ActionResult = {
	success: boolean;
	message: string;
	error?: Record<string, string[]>;
};
export async function importRestaurantsFromCSV(
	restaurantsData: Record<string, unknown>[],
): Promise<ActionResult> {
	try {
		const RestaurantSchema = z.object({
			name: z.string().min(1, "Name is required"),
			address: z.string().min(1, "Address is required"),
			description: z.string().optional().nullable(),
			imageUrl: z.string().optional().nullable(),
		});
		const validatedData = restaurantsData.map((restaurant) => {
			try {
				return RestaurantSchema.parse(restaurant);
			} catch (error) {
				if (error instanceof z.ZodError) {
					throw new Error(
						`Invalid restaurant data: ${error.errors.map((e) => e.message).join(", ")}`,
					);
				}
				throw error;
			}
		});
		const restaurantsToInsert = validatedData.map((restaurant) => ({
			name: restaurant.name,
			address: restaurant.address,
			description: restaurant.description || "",
			imageUrl: restaurant.imageUrl || "",
		}));
		// Insert all restaurants into the database
		await db.insert(restaurants).values(restaurantsToInsert);
		// Revalidate the restaurants page to show the new data
		revalidatePath("/admin/restaurants");
		return {
			success: true,
			message: `Successfully imported ${validatedData.length} restaurants.`,
		};
	} catch (error) {
		console.error("Error importing restaurants:", error);
		return {
			success: false,
			message: "Failed to import restaurants.",
			error: {
				_form: [(error as Error).message || "Unknown error occurred."],
			},
		};
	}
}
````

## File: src/app/(public)/deals/page.tsx
````typescript
import Link from 'next/link'
import {DealsList, DealsListSkeleton} from '@/features/deals'
import {
  getActiveDeals,
  getRestaurants,
} from '@/db/models/restaurants/restaurants'
import {Suspense} from 'react'
export const metadata = {
  title: 'Special Deals | Restaurant Passport',
  description:
    'View all current special offers and deals from our partner restaurants',
}
export default async function DealsPage() {
  const deals = await getActiveDeals()
  console.log('🚀 ~ DealsPage ~ deals:', deals)
  return (
    <div className='px-4 py-8 h-full w-full overflow-auto'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold'>Special Deals</h1>
        <div className='flex gap-3'>
          <Link
            href='/restaurants'
            className='text-blue-600 hover:text-blue-800 transition-colors'
          >
            View Restaurants
          </Link>
          <Link
            href='/'
            className='text-blue-600 hover:text-blue-800 transition-colors'
          >
            Back to Home
          </Link>
        </div>
      </div>
      <div className='mb-8'>
        <p className='text-gray-600'>
          Discover special offers and deals from our partner restaurants. Save
          money while collecting stamps on your food passport!
        </p>
      </div>
      <Suspense fallback={<DealsListSkeleton />}>
        <DealsList deals={deals} />
      </Suspense>
    </div>
  )
}
````

## File: src/app/admin/deals/[id]/edit/page.tsx
````typescript
import { notFound } from "next/navigation";
import { getDeals } from "@/db/models/restaurants/restaurants";
import { EditDealForm } from "@/components/admin/deals";
export const metadata = {
	title: "Admin - Edit Deal",
	description: "Edit an existing restaurant deal or offer",
};
export default async function EditDealPage({
	params,
}: { params: Promise<{ id: string }> }) {
	const resolvedParams = await params;
	const deals = await getDeals();
	const deal = deals.find((deal) => deal.id === BigInt(resolvedParams.id));
	if (!deal) {
		notFound();
	}
	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-2xl font-bold tracking-tight">Edit Deal</h2>
				<p className="text-muted-foreground">
					Update details for this restaurant deal
				</p>
			</div>
			<div className="bg-white rounded-lg shadow-sm p-6">
				<EditDealForm id={resolvedParams.id} deal={deal} />
			</div>
		</div>
	);
}
````

## File: src/app/admin/deals/[id]/page.tsx
````typescript
import { DealDetail } from "@/components/admin/deals";
export const metadata = {
	title: "Admin - Deal Details",
	description: "View and manage deal details",
};
export default async function DealDetailPage({
	params,
}: { params: Promise<{ id: string }> }) {
	const resolvedParams = await params;
	return (
		<div className="space-y-6">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div>
					<h2 className="text-2xl font-bold tracking-tight">Deal Details</h2>
					<p className="text-muted-foreground">
						View and manage details for this deal
					</p>
				</div>
				<div className="flex items-center gap-2">
					<a
						href={`/admin/deals/${resolvedParams.id}/edit`}
						className="inline-flex h-10 items-center justify-center rounded-md bg-[#818cf8] px-4 py-2 text-sm font-medium text-white hover:bg-[#6366f1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					>
						Edit Deal
					</a>
				</div>
			</div>
			<DealDetail id={resolvedParams.id} />
		</div>
	);
}
````

## File: src/app/admin/restaurants/new/page.tsx
````typescript
import { RestaurantForm } from "@/components/admin/restaurant-form";
import React from "react";
export const metadata = {
	title: "Add Restaurant | Admin Dashboard",
	description: "Add a new restaurant to the system",
};
export default function NewRestaurantPage() {
	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-2xl font-bold mb-6">Add New Restaurant</h1>
			<div className="bg-white rounded-lg shadow-sm p-6">
				<RestaurantForm />
			</div>
		</div>
	);
}
````

## File: src/app/api/webhooks/route.ts
````typescript
import { Webhook } from "svix";
import { headers } from "next/headers";
import type { User, WebhookEvent } from "@clerk/nextjs/server";
import { createUser } from "@/db/models/users";
export async function POST(req: Request) {
	const SIGNING_SECRET = process.env.SIGNING_SECRET;
	if (!SIGNING_SECRET) {
		throw new Error(
			"Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env",
		);
	}
	const wh = new Webhook(SIGNING_SECRET);
	const headerPayload = await headers();
	const svix_id = headerPayload.get("svix-id");
	const svix_timestamp = headerPayload.get("svix-timestamp");
	const svix_signature = headerPayload.get("svix-signature");
	if (!svix_id || !svix_timestamp || !svix_signature) {
		return new Response("Error: Missing Svix headers", {
			status: 400,
		});
	}
	const payload = await req.json();
	console.log("🚀 ~ POST ~ payload:", payload);
	try {
		const { data, type } = payload;
		if (type === "user.created") {
			const { id: clerkId, email_addresses, first_name, last_name } = data;
			const email = email_addresses[0].email_address;
			const name = `${first_name} ${last_name}`;
			const user = await createUser({
				clerkId,
				name,
				email,
			});
			console.log("🚀 ~ POST ~ user:", user);
			return Response.json({
				message: "User created",
				data: user,
			});
		}
	} catch (err) {
		console.error("Error: Could not verify webhook:", err);
		return new Response("Error: Verification error", {
			status: 400,
		});
	}
}
````

## File: src/components/admin/deals/index.ts
````typescript
export * from "./deal-detail";
export * from "./deal-filters";
export * from "./deals-table";
export * from "./edit-deal-form";
export * from "./new-deal-form";
export { createDeal } from "./actions";
````

## File: src/components/admin/admin-content.tsx
````typescript
"use client";
import { useSidebar } from "@/components/admin/SidebarContext";
import { AdminSidebar } from "@/components/admin/Sidebar";
export function AdminContent({ children }: { children: React.ReactNode }) {
	const { collapsed } = useSidebar();
	return (
		<>
			{}
			<AdminSidebar />
			{}
			<div
				className={`transition-all duration-300 min-h-screen ${
					collapsed ? "md:ml-20" : "md:ml-64"
				}`}
			>
				{}
				<header className="bg-white shadow-xs">
					<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
						<h1 className="text-lg font-semibold text-gray-900">
							Admin Dashboard
						</h1>
					</div>
				</header>
				{}
				{}
				<main className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
					{children}
				</main>
			</div>
		</>
	);
}
````

## File: src/components/admin/prize-card.tsx
````typescript
"use client";
import type { Prize } from "@/types/db";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
interface PrizeCardProps {
	prize: Prize;
}
export function PrizeCard({ prize }: PrizeCardProps) {
	return (
		<Card className="overflow-hidden h-full flex flex-col">
			<div className="relative h-48 w-full">
				<Image
					src={prize.imageUrl}
					alt={prize.name}
					fill
					className="object-cover"
				/>
			</div>
			<CardHeader className="pb-2">
				<div className="flex justify-between items-start">
					<h3 className="font-semibold text-lg">{prize.name}</h3>
					<Badge variant={prize.available ? "default" : "outline"}>
						{prize.available ? "Available" : "Not Available"}
					</Badge>
				</div>
			</CardHeader>
			<CardContent className="flex-grow">
				<p className="text-sm text-gray-600">{prize.description}</p>
				<div className="mt-2 space-y-1">
					<div className="flex justify-between text-sm">
						<span className="text-gray-500">Required Punches:</span>
						<span className="font-medium">{prize.requiredPunches}</span>
					</div>
					{prize.quantity > 0 && (
						<div className="flex justify-between text-sm">
							<span className="text-gray-500">Quantity:</span>
							<span className="font-medium">{prize.quantity}</span>
						</div>
					)}
					<div className="flex justify-between text-sm">
						<span className="text-gray-500">Type:</span>
						<span className="font-medium">{prize.type}</span>
					</div>
				</div>
			</CardContent>
			<CardFooter className="pt-2 text-xs text-gray-500">
				Created: {new Date(prize.createdAt)}
			</CardFooter>
		</Card>
	);
}
````

## File: src/components/admin/restaurant-detail-modal.tsx
````typescript
'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'
import {PrizeCard} from './prize-card'
import {QRCodeManager} from '@/app/admin/restaurants/qr-code-manager'
import {Badge} from '@/components/ui/badge'
import Image from 'next/image'
import type {Restaurant, Prize, PunchCard} from '@/types/db'
import {PunchCardsList} from './punch-cards-list'
interface DetailedRestaurant extends Restaurant {
  prizes: Prize[]
  punchCards: PunchCard[]
  punchCardCount: number
}
interface RestaurantDetailModalProps {
  restaurant: DetailedRestaurant
  isOpen: boolean
  onClose: () => void
}
export function RestaurantDetailModal({
  restaurant,
  isOpen,
  onClose,
}: RestaurantDetailModalProps) {
  if (!restaurant) return null
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold flex items-center gap-2'>
            {restaurant.name}
            <Badge variant='outline' className='ml-2'>
              ID: {restaurant.id.toString()}
            </Badge>
          </DialogTitle>
          <DialogDescription className='text-gray-600'>
            {restaurant.address}
          </DialogDescription>
        </DialogHeader>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
          {}
          <div className='relative h-64 rounded-lg overflow-hidden'>
            {restaurant.imageUrl && (
              <Image
                src={restaurant.imageUrl}
                alt={restaurant.name}
                fill
                className='object-cover'
              />
            )}
          </div>
          {}
          <div>
            <h3 className='text-lg font-semibold mb-2'>About</h3>
            <p className='text-gray-700'>{restaurant.description}</p>
            {}
            <div className='mt-4'>
              <h3 className='text-lg font-semibold mb-2'>QR Code</h3>
              {restaurant.qrCodeUrl ? (
                <div className='border border-gray-200 rounded-lg p-4 inline-block'>
                  <img
                    src={restaurant.qrCodeUrl}
                    alt='Restaurant QR Code'
                    className='w-32 h-32'
                  />
                </div>
              ) : (
                <p className='text-gray-600'>No QR code generated yet.</p>
              )}
            </div>
          </div>
        </div>
        {}
        <div className='mt-6'>
          <h3 className='text-lg font-semibold mb-2'>
            Punch Cards
            <Badge variant='secondary' className='ml-2'>
              {restaurant.punchCards?.length || 0}
            </Badge>
          </h3>
          {restaurant.punchCards && restaurant.punchCards.length > 0 ? (
            <PunchCardsList punchCards={restaurant.punchCards} />
          ) : (
            <p className='text-gray-600'>
              No punch cards for this restaurant yet.
            </p>
          )}
        </div>
        <DialogFooter className='mt-6'>
          <Button variant='outline' onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
````

## File: src/components/admin/SidebarContext.tsx
````typescript
"use client";
import React, {
	createContext,
	useContext,
	useState,
	type ReactNode,
} from "react";
interface SidebarContextType {
	collapsed: boolean;
	toggleCollapse: () => void;
}
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
export function SidebarProvider({ children }: { children: ReactNode }) {
	const [collapsed, setCollapsed] = useState(false);
	const toggleCollapse = () => {
		setCollapsed(!collapsed);
	};
	return (
		<SidebarContext.Provider value={{ collapsed, toggleCollapse }}>
			{children}
		</SidebarContext.Provider>
	);
}
export function useSidebar() {
	const context = useContext(SidebarContext);
	if (context === undefined) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
}
````

## File: src/components/kokonutui/list-01.tsx
````typescript
import { cn } from "@/lib/utils";
import { MessageSquare, type LucideIcon, Music, Store } from "lucide-react";
interface ListItem {
    id: string;
    title: string;
    description?: string;
    icon: LucideIcon;
    iconStyle: string;
    time: string;
    badge?: {
        text: string;
        variant: "pink" | "indigo" | "orange";
    };
    starred?: boolean;
}
interface List01Props {
    items?: ListItem[];
    className?: string;
}
const iconStyles = {
    music: "from-pink-500/20 to-pink-500/10 text-pink-600 dark:from-pink-400/20 dark:to-pink-400/10 dark:text-pink-400",
    store: "from-indigo-500/20 to-indigo-500/10 text-indigo-600 dark:from-indigo-400/20 dark:to-indigo-400/10 dark:text-indigo-400",
    message:
        "from-emerald-500/20 to-emerald-500/10 text-emerald-600 dark:from-emerald-400/20 dark:to-emerald-400/10 dark:text-emerald-400",
};
const ITEMS: ListItem[] = [
    {
        id: "1",
        title: "iMessage",
        description:
            'John sent you a message: "Hey, what do you think about..."',
        icon: MessageSquare,
        iconStyle: "message",
        time: "now",
        badge: { text: "New", variant: "orange" },
    },
    {
        id: "2",
        title: "Apple Music",
        description: "Your Daily Mix is ready with 25 new songs",
        icon: Music,
        iconStyle: "music",
        time: "2 min ago",
        badge: { text: "Music", variant: "pink" },
    },
    {
        id: "3",
        title: "App Store",
        description: "Figma has been updated to version 2.0",
        icon: Store,
        iconStyle: "store",
        time: "5 min ago",
        badge: { text: "Update", variant: "indigo" },
    },
];
const badgeVariants = {
    pink: "bg-pink-500/10 text-pink-600 dark:bg-pink-400/10 dark:text-pink-300",
    indigo: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300",
    orange: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-300",
};
export default function List01({ items = ITEMS, className }: List01Props) {
    return (
        <div
            className={cn(
                "w-full max-w-2xl mx-auto p-4",
                "bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl",
                "rounded-3xl border border-white/20 dark:border-zinc-800/50",
                "shadow-xs",
                className
            )}
        >
            <div className="space-y-3">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={cn(
                            "group relative flex items-start gap-4 p-4",
                            "bg-white/50 dark:bg-zinc-800/50",
                            "hover:bg-white/80 dark:hover:bg-zinc-700/50",
                            "backdrop-blur-lg",
                            "transition-all duration-300 ease-out",
                            "rounded-2xl",
                            "border border-white/20 dark:border-zinc-700/50",
                            "shadow-2xs hover:shadow-xs"
                        )}
                    >
                        <div
                            className={cn(
                                "shrink-0 p-3 rounded-2xl",
                                "bg-linear-to-br",
                                iconStyles[
                                    item.iconStyle as keyof typeof iconStyles
                                ],
                                "shadow-2xs border border-white/10 dark:border-zinc-700/50",
                                "transition-colors duration-300"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0 pt-0.5">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                                    {item.title}
                                </h3>
                                {item.badge && (
                                    <span
                                        className={cn(
                                            "px-2.5 py-0.5 rounded-full text-xs font-medium",
                                            "transition-colors duration-300",
                                            "shadow-2xs",
                                            badgeVariants[
                                                item.badge
                                                    .variant as keyof typeof badgeVariants
                                            ]
                                        )}
                                    >
                                        {item.badge.text}
                                    </span>
                                )}
                            </div>
                            {item.description && (
                                <p className="text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-2">
                                    {item.description}
                                </p>
                            )}
                            <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 mt-2 block">
                                {item.time}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
````

## File: src/components/kokonutui/list-02.tsx
````typescript
import { cn } from "@/lib/utils";
import {
    ArrowUpRight,
    ArrowDownLeft,
    Wallet,
    ShoppingCart,
    CreditCard,
    type LucideIcon,
} from "lucide-react";
interface Transaction {
    id: string;
    title: string;
    amount: string;
    type: "incoming" | "outgoing";
    category: string;
    icon: LucideIcon;
    timestamp: string;
    status: "completed" | "pending" | "failed";
}
interface List02Props {
    transactions?: Transaction[];
    className?: string;
}
const categoryStyles = {
    shopping:
        "from-violet-600/10 via-violet-600/5 to-violet-600/0 text-violet-700 dark:from-violet-500/20 dark:via-violet-500/10 dark:to-transparent dark:text-violet-400",
    food: "from-orange-600/10 via-orange-600/5 to-orange-600/0 text-orange-700 dark:from-orange-500/20 dark:via-orange-500/10 dark:to-transparent dark:text-orange-400",
    transport:
        "from-blue-600/10 via-blue-600/5 to-blue-600/0 text-blue-700 dark:from-blue-500/20 dark:via-blue-500/10 dark:to-transparent dark:text-blue-400",
    entertainment:
        "from-pink-600/10 via-pink-600/5 to-pink-600/0 text-pink-700 dark:from-pink-500/20 dark:via-pink-500/10 dark:to-transparent dark:text-pink-400",
};
const TRANSACTIONS: Transaction[] = [
    {
        id: "1",
        title: "Apple Store Purchase",
        amount: "$999.00",
        type: "outgoing",
        category: "shopping",
        icon: ShoppingCart,
        timestamp: "Today, 2:45 PM",
        status: "completed",
    },
    {
        id: "2",
        title: "Salary Deposit",
        amount: "$4,500.00",
        type: "incoming",
        category: "transport",
        icon: Wallet,
        timestamp: "Today, 9:00 AM",
        status: "completed",
    },
    {
        id: "3",
        title: "Netflix Subscription",
        amount: "$15.99",
        type: "outgoing",
        category: "entertainment",
        icon: CreditCard,
        timestamp: "Yesterday",
        status: "pending",
    },
];
export default function List02({
    transactions = TRANSACTIONS,
    className,
}: List02Props) {
    return (
        <div
            className={cn(
                "w-full max-w-2xl mx-auto",
                "bg-white dark:bg-zinc-900/70",
                "border border-zinc-100 dark:border-zinc-800",
                "rounded-3xl shadow-xs backdrop-blur-xl",
                className
            )}
        >
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 flex flex-col gap-2">
                        Recent Activity
                        <p className="text-sm text-zinc-600 dark:text-zinc-500 ">
                            23 Transactions
                        </p>
                    </h2>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-600 dark:text-zinc-500">
                            This Month
                        </span>
                    </div>
                </div>
                <div className="space-y-4">
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className={cn(
                                "group relative flex items-center gap-4",
                                "p-3 -mx-3 rounded-2xl",
                                "transition-all duration-300 ease-out",
                                "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                                "hover:shadow-xs",
                                "border border-transparent",
                                "hover:border-zinc-300 dark:hover:border-zinc-700/50"
                            )}
                        >
                            <div
                                className={cn(
                                    "relative",
                                    "w-12 h-12 flex items-center justify-center",
                                    "rounded-2xl",
                                    "bg-linear-to-br",
                                    categoryStyles[
                                        transaction.category as keyof typeof categoryStyles
                                    ],
                                    "transition-all duration-300",
                                    "group-hover:shadow-lg",
                                    "border border-zinc-200/50 dark:border-zinc-700/50",
                                    "shadow-2xs"
                                )}
                            >
                                <transaction.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 flex items-center justify-between min-w-0">
                                <div className="space-y-1 min-w-0">
                                    <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100 truncate">
                                        {transaction.title}
                                    </h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {transaction.timestamp}
                                    </p>
                                </div>
                                <div
                                    className={cn(
                                        "flex items-center gap-2 shrink-0 pl-4",
                                        "transition-colors duration-300"
                                    )}
                                >
                                    <span
                                        className={cn(
                                            "text-base font-semibold",
                                            transaction.type === "incoming"
                                                ? "text-emerald-700 dark:text-emerald-400"
                                                : "text-zinc-800 dark:text-zinc-100"
                                        )}
                                    >
                                        {transaction.type === "incoming"
                                            ? "+"
                                            : "-"}
                                        {transaction.amount}
                                    </span>
                                    {transaction.type === "incoming" ? (
                                        <ArrowDownLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                                    ) : (
                                        <ArrowUpRight className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                    type="button"
                    className="w-full py-2.5 px-4 rounded-xl text-sm font-medium
                    text-zinc-700 dark:text-zinc-400
                    hover:bg-zinc-100 dark:hover:bg-zinc-800
                    transition-colors duration-200"
                >
                    View All Transactions
                </button>
            </div>
        </div>
    );
}
````

## File: src/components/leaderboard/restaurant-leaderboard.tsx
````typescript
"use client";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { RestaurantLeaderboardEntry } from "@/types/api";
interface RestaurantLeaderboardProps {
	restaurants: RestaurantLeaderboardEntry[];
}
export function RestaurantLeaderboard({
	restaurants,
}: RestaurantLeaderboardProps) {
	const getRankBadgeColor = (rank: number) => {
		switch (rank) {
			case 1:
				return "bg-yellow-100 text-yellow-800 border-yellow-200";
			case 2:
				return "bg-gray-100 text-gray-800 border-gray-200";
			case 3:
				return "bg-amber-100 text-amber-800 border-amber-200";
			default:
				return "bg-blue-100 text-blue-800 border-blue-200";
		}
	};
	return (
		<div className="w-full">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-24 text-center">Rank</TableHead>
						<TableHead>Restaurant</TableHead>
						<TableHead className="text-right">Punch Cards</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{restaurants.length === 0 ? (
						<TableRow>
							<TableCell colSpan={3} className="h-24 text-center">
								No restaurants found
							</TableCell>
						</TableRow>
					) : (
						restaurants.map((restaurant, index) => (
							<TableRow
								key={restaurant.restaurantId.toString()}
								className="border-b transition-colors hover:bg-muted/50"
							>
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.05 }}
									className="contents"
								>
									<TableCell className="text-center font-medium">
										{restaurant.rank <= 3 ? (
											<Badge
												className={`${getRankBadgeColor(restaurant.rank)}`}
											>
												{restaurant.rank === 1 && (
													<Trophy className="mr-1 h-3 w-3" />
												)}
												{restaurant.rank}
											</Badge>
										) : (
											restaurant.rank
										)}
									</TableCell>
									<TableCell>
										<Link
											href={`/restaurants/${restaurant.restaurantId}`}
											className="flex items-center gap-3 hover:underline"
										>
											<div className="relative h-10 w-10 overflow-hidden rounded-md">
												<Image
													src={
														restaurant.imageUrl ||
														"https://via.placeholder.com/40"
													}
													alt={restaurant.restaurantName}
													fill
													className="object-cover"
													sizes="40px"
												/>
											</div>
											<span className="font-medium">
												{restaurant.restaurantName}
											</span>
										</Link>
									</TableCell>
									<TableCell className="text-right font-medium">
										{restaurant.punchCardCount}
									</TableCell>
								</motion.div>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
}
````

## File: src/components/leaderboard/user-leaderboard.tsx
````typescript
"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";
import type { UserLeaderboardEntry } from "@/types/api";
interface UserLeaderboardProps {
	users: UserLeaderboardEntry[];
}
const getInitials = (name: string) => {
	return name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase();
};
export function UserLeaderboard({ users }: UserLeaderboardProps) {
	// Function to get rank badge color
	const getRankBadgeColor = (rank: number) => {
		switch (rank) {
			case 1:
				return "bg-yellow-100 text-yellow-800 border-yellow-200";
			case 2:
				return "bg-gray-100 text-gray-800 border-gray-200";
			case 3:
				return "bg-amber-100 text-amber-800 border-amber-200";
			default:
				return "bg-blue-100 text-blue-800 border-blue-200";
		}
	};
	return (
		<div className="w-full">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-24 text-center">Rank</TableHead>
						<TableHead>User</TableHead>
						<TableHead className="text-right">Punch Cards</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{users.length === 0 ? (
						<TableRow>
							<TableCell colSpan={3} className="h-24 text-center">
								No users found
							</TableCell>
						</TableRow>
					) : (
						users.map((user, index) => (
							<TableRow
								key={user.userId.toString()}
								className="border-b transition-colors hover:bg-muted/50"
							>
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.05 }}
									className="contents"
								>
									<TableCell className="text-center font-medium">
										{user.rank <= 3 ? (
											<Badge className={`${getRankBadgeColor(user.rank)}`}>
												{user.rank === 1 && <Trophy className="mr-1 h-3 w-3" />}
												{user.rank}
											</Badge>
										) : (
											user.rank
										)}
									</TableCell>
									<TableCell>
										<div className="flex items-center gap-2">
											<Avatar className="h-8 w-8">
												<AvatarFallback className="bg-primary/10 text-primary">
													{getInitials(user.userName)}
												</AvatarFallback>
											</Avatar>
											<span className="font-medium">{user.userName}</span>
										</div>
									</TableCell>
									<TableCell className="text-right font-medium">
										{user.punchCardCount}
									</TableCell>
								</motion.div>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
}
````

## File: src/components/nav/nav.stories.tsx
````typescript
import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./nav";
import { fn, userEvent, within, expect } from "@storybook/test";
import { useState } from "react";
const meta = {
	title: "Components/Nav",
	component: Nav,
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"A mobile-style bottom navigation bar with animated active state indicator.",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		initialActiveTab: {
			control: "select",
			options: ["home", "restaurants", "profile", "punchCards", "leaderBoard"],
			description: "The initially active tab",
			defaultValue: "home",
		},
		onTabChange: {
			action: "tab changed",
			description: "Callback fired when a tab is clicked",
		},
	},
} satisfies Meta<typeof Nav>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		initialActiveTab: "home",
	},
};
export const ActiveRestaurants: Story = {
	args: {
		initialActiveTab: "restaurants",
	},
};
export const ActiveProfile: Story = {
	args: {
		initialActiveTab: "profile",
	},
};
export const ActivePunchCards: Story = {
	args: {
		initialActiveTab: "punchCards",
	},
};
export const ActiveLeaderBoard: Story = {
	args: {
		initialActiveTab: "leaderBoard",
	},
};
export const Interactive: Story = {
	args: {
		initialActiveTab: "home",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Click on different tabs to see the animated transition of the active indicator.",
			},
		},
		chromatic: { pauseAnimationAtEnd: true },
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step("Verify home tab is initially active", async () => {
			const homeTab = canvas.getByText("Home");
			expect(homeTab.closest("button")).toHaveClass("text-primary");
		});
		await step("Click on Restaurants tab", async () => {
			await userEvent.click(canvas.getByText("Restaurants"));
			const restaurantsTab = canvas.getByText("Restaurants");
			expect(restaurantsTab.closest("button")).toHaveClass("text-primary");
		});
		await step("Click on Profile tab", async () => {
			await userEvent.click(canvas.getByText("Profile"));
			const profileTab = canvas.getByText("Profile");
			expect(profileTab.closest("button")).toHaveClass("text-primary");
		});
		await step("Click on Punch Cards tab", async () => {
			await userEvent.click(canvas.getByText("Punch Cards"));
			const punchCardsTab = canvas.getByText("Punch Cards");
			expect(punchCardsTab.closest("button")).toHaveClass("text-primary");
		});
		await step("Click on Leader Board tab", async () => {
			await userEvent.click(canvas.getByText("Leader Board"));
			const leaderBoardTab = canvas.getByText("Leader Board");
			expect(leaderBoardTab.closest("button")).toHaveClass("text-primary");
		});
		await step("Return to Home tab", async () => {
			await userEvent.click(canvas.getByText("Home"));
			const homeTab = canvas.getByText("Home");
			expect(homeTab.closest("button")).toHaveClass("text-primary");
		});
	},
};
export const WithTabChangeCallback: Story = {
	render: () => {
		const TabChangeDemo = () => {
			const [lastClickedTab, setLastClickedTab] = useState("None yet");
			return (
				<div className="flex flex-col h-screen">
					<div className="flex-1 flex items-center justify-center">
						<div className="p-4 border rounded-md shadow-xs">
							<h3 className="text-lg font-medium mb-2">Tab Navigation Demo</h3>
							<p className="text-sm text-muted-foreground mb-4">
								Click on different tabs in the navigation bar below to see this
								update.
							</p>
							<div className="flex items-center gap-2">
								<span className="text-sm font-medium">Last clicked tab:</span>
								<span className="px-2 py-1 bg-primary/10 rounded text-primary font-medium">
									{lastClickedTab}
								</span>
							</div>
						</div>
					</div>
					<Nav
						initialActiveTab="home"
						onTabChange={(tabId) => setLastClickedTab(tabId)}
					/>
				</div>
			);
		};
		return <TabChangeDemo />;
	},
	parameters: {
		docs: {
			description: {
				story:
					"Demonstrates how to use the onTabChange callback to respond to navigation changes.",
			},
		},
	},
};
````

## File: src/components/ui/animated-modal.tsx
````typescript
'use client'
import {cn} from '@/lib/utils'
import {AnimatePresence, motion} from 'framer-motion'
import type React from 'react'
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
interface ModalContextType {
  open: boolean
  setOpen: (open: boolean) => void
}
const ModalContext = createContext<ModalContextType | undefined>(undefined)
export const ModalProvider = ({children}: {children: ReactNode}) => {
  const [open, setOpen] = useState(false)
  return (
    <ModalContext.Provider value={{open, setOpen}}>
      {children}
    </ModalContext.Provider>
  )
}
export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
export function Modal({children}: {children: ReactNode}) {
  return <ModalProvider>{children}</ModalProvider>
}
export const ModalTrigger = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  const {setOpen} = useModal()
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden',
        className
      )}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  )
}
export const ModalBody = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  const {open} = useModal()
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])
  const modalRef = useRef(null)
  const {setOpen} = useModal()
  useOutsideClick(modalRef, () => setOpen(false))
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            backdropFilter: 'blur(10px)',
          }}
          exit={{
            opacity: 0,
            backdropFilter: 'blur(0px)',
          }}
          className='fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full  flex items-center justify-center z-50'
        >
          <Overlay />
          <motion.div
            ref={modalRef}
            className={cn(
              'min-h-[50%] max-h-[90%] md:max-w-[40%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden',
              className
            )}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateX: 40,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotateX: 10,
            }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 15,
            }}
          >
            <CloseIcon />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export const ModalContent = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex flex-col flex-1 p-8 md:p-10', className)}>
      {children}
    </div>
  )
}
export const ModalFooter = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'flex justify-end p-4 bg-gray-100 dark:bg-neutral-900',
        className
      )}
    >
      {children}
    </div>
  )
}
const Overlay = ({className}: {className?: string}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: 'blur(10px)',
      }}
      exit={{
        opacity: 0,
        backdropFilter: 'blur(0px)',
      }}
      className={`fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ${className}`}
    ></motion.div>
  )
}
const CloseIcon = () => {
  const {setOpen} = useModal()
  return (
    <button
      onClick={() => setOpen(false)}
      className='absolute top-4 right-4 group'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='text-black dark:text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M18 6l-12 12' />
        <path d='M6 6l12 12' />
      </svg>
    </button>
  )
}
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      callback(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, callback])
}
````

## File: src/components/ui/avatar.tsx
````typescript
"use client";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
const Avatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={cn(
			"relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
			className,
		)}
		{...props}
	/>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn("aspect-square h-full w-full", className)}
		{...props}
	/>
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn(
			"flex h-full w-full items-center justify-center rounded-full bg-muted",
			className,
		)}
		{...props}
	/>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export { Avatar, AvatarImage, AvatarFallback };
````

## File: src/components/ui/badge.tsx
````typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
export { Badge, badgeVariants }
````

## File: src/components/ui/card.tsx
````typescript
import * as React from "react"
import { cn } from "@/lib/utils"
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"
const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
````

## File: src/components/ui/checkbox.tsx
````typescript
"use client"
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
export { Checkbox }
````

## File: src/components/ui/dialog.tsx
````typescript
"use client"
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
````

## File: src/components/ui/hero-parallax.tsx
````typescript
'use client'
import React from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)
  const ref = React.useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const springConfig = {stiffness: 300, damping: 30, bounce: 100}
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  )
  return (
    <div
      ref={ref}
      className='h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''
      >
        <motion.div className='flex flex-row-reverse space-x-reverse space-x-20 mb-20'>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row  mb-20 space-x-20 '>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row-reverse space-x-reverse space-x-20'>
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
export const Header = () => {
  return (
    <div className='max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0'>
      <h1 className='text-2xl md:text-7xl font-bold dark:text-white'>
        The Ultimate <br /> development studio
      </h1>
      <p className='max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200'>
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  )
}
export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className='group/product h-96 w-[30rem] relative shrink-0'
    >
      <Link
        href={product.link}
        className='block group-hover/product:shadow-2xl '
      >
        <Image
          src={product.thumbnail}
          height='600'
          width='600'
          className='object-cover object-left-top absolute h-full w-full inset-0'
          alt={product.title}
        />
      </Link>
      <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div>
      <h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white'>
        {product.title}
      </h2>
    </motion.div>
  )
}
````

## File: src/components/ui/restaurant-punch-card.tsx
````typescript
'use client'
import * as React from 'react'
import {motion} from 'framer-motion'
import {cn} from '@/lib/utils'
import {BarChart, CalendarDays, Ticket, Users} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {PUNCH_THRESHOLD} from '@/components/ui/restaurant-specific-user-punch-card'
interface RestaurantPunchCardProps {
  restaurantName: string
  totalPunchCards: number
  completedPunchCards: number
  activePunchCards: number
  recentActivityDays?: number
  className?: string
}
export function RestaurantPunchCard({
  restaurantName,
  totalPunchCards,
  completedPunchCards,
  activePunchCards,
  recentActivityDays = 30,
  className,
}: RestaurantPunchCardProps) {
  const completionRate =
    totalPunchCards > 0
      ? Math.round((completedPunchCards / totalPunchCards) * 100)
      : 0
  const averagePunchesPerCard =
    totalPunchCards > 0
      ? PUNCH_THRESHOLD * (completedPunchCards / totalPunchCards)
      : 0
  return (
    <div className={cn('grid gap-4 md:grid-cols-2 lg:grid-cols-4', className)}>
      {}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3}}
      >
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Punch Cards
            </CardTitle>
            <Ticket className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{totalPunchCards}</div>
            <p className='text-xs text-muted-foreground'>
              Cards issued to users
            </p>
          </CardContent>
        </Card>
      </motion.div>
      {}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3, delay: 0.1}}
      >
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Active Cards</CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{activePunchCards}</div>
            <p className='text-xs text-muted-foreground'>
              Current in-progress cards
            </p>
          </CardContent>
        </Card>
      </motion.div>
      {}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3, delay: 0.2}}
      >
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Completion Rate
            </CardTitle>
            <BarChart className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{completionRate}%</div>
            <div className='h-2 w-full bg-muted rounded-full mt-2'>
              <div
                className='h-full bg-primary rounded-full'
                style={{width: `${completionRate}%`}}
              />
            </div>
            <p className='text-xs text-muted-foreground mt-2'>
              {completedPunchCards} completed cards
            </p>
          </CardContent>
        </Card>
      </motion.div>
      {}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3, delay: 0.3}}
      >
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Recent Activity
            </CardTitle>
            <CalendarDays className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>
              {Math.round(averagePunchesPerCard * 10) / 10}
            </div>
            <p className='text-xs text-muted-foreground'>
              Avg. punches per card (last {recentActivityDays} days)
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
````

## File: src/components/ui/restaurant-specific-user-punch-card.tsx
````typescript
'use client'
import * as React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {cn} from '@/lib/utils'
import {Award, Coffee, Stamp, Utensils} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {Badge} from '@/components/ui/badge'
export const PUNCH_THRESHOLD = 10
interface PunchCardProps
  extends Omit<React.ComponentProps<typeof motion.div>, 'ref'> {
  restaurantName: string
  restaurantImage?: string
  restaurantId: string | number | bigint
  currentPunches: number
  MAX_PUNCH_THRESHOLD?: number
  completed?: boolean
  lastUpdated?: Date | string
  onAddPunch?: () => void
}
const PunchCard = React.forwardRef<HTMLDivElement, PunchCardProps>(
  (
    {
      className,
      restaurantName,
      restaurantImage,
      restaurantId,
      currentPunches,
      MAX_PUNCH_THRESHOLD = PUNCH_THRESHOLD,
      completed = false,
      lastUpdated,
      onAddPunch,
      ...props
    },
    ref
  ) => {
    const [isAnimating, setIsAnimating] = React.useState(false)
    const [punchPosition, setPunchPosition] = React.useState({x: 0, y: 0})
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const handleAddPunch = (
      e:
        | React.MouseEvent<HTMLButtonElement>
        | React.TouchEvent<HTMLButtonElement>
    ) => {
      if (currentPunches >= MAX_PUNCH_THRESHOLD || isAnimating || completed)
        return
      let x = 0
      let y = 0
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        if ('clientX' in e) {
          x = e.clientX - rect.left
          y = e.clientY - rect.top
        } else {
          const touch = e.touches[0]
          x = touch.clientX - rect.left
          y = touch.clientY - rect.top
        }
        if (!x && !y) {
          x = rect.width / 2
          y = rect.height / 2
        }
        setPunchPosition({x, y})
      }
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
        onAddPunch?.()
      }, 800)
    }
    const formatDate = (dateString: string | Date) => {
      const date = new Date(dateString)
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(date)
    }
    return (
      <motion.div
        ref={ref}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        whileHover={{y: -5}}
        className={cn(
          'relative overflow-hidden rounded-xl bg-card shadow-lg',
          'w-full h-full flex flex-col',
          className
        )}
        style={{perspective: 1000}}
        {...props}
      >
        {}
        <div className='relative h-36 sm:h-48 w-full'>
          <Image
            src={'/RWP.jpg'}
            alt={`${restaurantName}`}
            fill
            className='object-cover'
            sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
          {}
          <div className='absolute bottom-0 w-full p-4'>
            <h3 className='text-lg sm:text-xl font-bold text-white'>
              {restaurantName}
            </h3>
            {lastUpdated && (
              <p className='text-xs text-white/70'>
                Last updated: {formatDate(lastUpdated)}
              </p>
            )}
          </div>
        </div>
        {}
        <div className='flex flex-col flex-grow p-4 sm:p-6'>
          <div className='flex justify-between items-center mb-3'>
            <span className='text-sm sm:text-base font-medium text-foreground'>
              {currentPunches} of {MAX_PUNCH_THRESHOLD} punches
            </span>
            {completed && (
              <Badge
                variant='secondary'
                className='bg-green-100 text-green-800'
              >
                Completed
              </Badge>
            )}
          </div>
          {}
          <div
            className={cn(
              'grid gap-2 mb-5',
              MAX_PUNCH_THRESHOLD <= 5
                ? 'grid-cols-5'
                : MAX_PUNCH_THRESHOLD <= 8
                ? 'grid-cols-4'
                : 'grid-cols-5'
            )}
          >
            {Array.from({length: MAX_PUNCH_THRESHOLD}).map((_, index) => (
              <motion.div
                key={`punch-${index}-${
                  currentPunches > index ? 'filled' : 'empty'
                }`}
                className={cn(
                  'aspect-square rounded-lg border-2 flex items-center justify-center',
                  index < currentPunches
                    ? 'bg-primary/10 border-primary'
                    : 'bg-muted/50 border-muted'
                )}
                initial={false}
                animate={
                  index === currentPunches - 1 && isAnimating
                    ? {scale: [1, 1.2, 1], rotate: [0, 15, 0]}
                    : {}
                }
                transition={{duration: 0.5}}
              >
                {index < currentPunches && (
                  <motion.div
                    initial={{scale: 0, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                      delay: index === currentPunches - 1 ? 0.2 : 0,
                    }}
                  >
                    <Stamp className='h-5 w-5 text-primary' />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          {}
          <div className='mt-auto flex flex-col sm:flex-row gap-3'>
            {!completed ? (
              <motion.button
                ref={buttonRef}
                className='py-3 px-4 rounded-lg bg-secondary text-secondary-foreground font-medium relative overflow-hidden w-full flex-1 touch-manipulation text-base'
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                onClick={handleAddPunch}
                onTouchStart={handleAddPunch}
                disabled={isAnimating || completed}
              >
                Add Punch
                <AnimatePresence>
                  {isAnimating && (
                    <motion.div
                      className='absolute bg-primary rounded-full'
                      style={{
                        left: punchPosition.x,
                        top: punchPosition.y,
                        width: 10,
                        height: 10,
                      }}
                      initial={{scale: 0, opacity: 1}}
                      animate={{
                        scale: 20,
                        opacity: 0,
                      }}
                      exit={{opacity: 0}}
                      transition={{duration: 0.8}}
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            ) : (
              <motion.button
                className='py-3 px-4 rounded-lg bg-green-600 text-white font-medium flex items-center justify-center gap-2 flex-1 text-base touch-manipulation'
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
              >
                <Award className='h-5 w-5' />
                <span>Claim Reward</span>
              </motion.button>
            )}
            <Link
              href={`/restaurants/${restaurantId}`}
              className='py-3 px-4 rounded-lg border border-border bg-background hover:bg-muted transition-colors flex items-center justify-center text-base touch-manipulation min-h-[44px]'
            >
              View Restaurant
            </Link>
          </div>
        </div>
      </motion.div>
    )
  }
)
PunchCard.displayName = 'PunchCard'
export {PunchCard}
````

## File: src/components/ui/sheet.tsx
````typescript
"use client"
import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
const Sheet = SheetPrimitive.Root
const SheetTrigger = SheetPrimitive.Trigger
const SheetClose = SheetPrimitive.Close
const SheetPortal = SheetPrimitive.Portal
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName
const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"
const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName
export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
````

## File: src/components/ui/tabs.tsx
````typescript
"use client"
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"
const Tabs = TabsPrimitive.Root
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName
export { Tabs, TabsList, TabsTrigger, TabsContent }
````

## File: src/context/location-context.tsx
````typescript
"use client";
import { useGeolocation } from "@/hooks/use-geolocation";
import { createContext, useMemo } from "react";
type LocationContextType = {
	coords: GeolocationCoordinates | null;
	error: string | null;
};
export const LocationContext = createContext<LocationContextType>({
	coords: null,
	error: null,
});
export const LocationProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const { coords, error } = useGeolocation();
	const value = useMemo(() => ({ coords, error }), [coords, error]);
	return (
		<LocationContext.Provider value={value}>
			{children}
		</LocationContext.Provider>
	);
};
````

## File: src/context/user-context.tsx
````typescript
'use client'
import type React from 'react'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'
import {useUser as useClerkUser, useSession} from '@clerk/nextjs'
import {getUserByClerkId} from '@/db'
export type AppUser = {
  id: number
  clerkId: string
  name: string
  isStaff: boolean
  isAdmin: boolean
}
export type UserContextType = {
  currentUser: AppUser | null
  isLoading: boolean
  error: string | null
  reloadUser: () => void
}
const UserContext = createContext<UserContextType | undefined>(undefined)
export const UserProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const {user: clerkUser} = useClerkUser()
  console.log('🚀 ~ clerkUser:', clerkUser)
  const {session} = useSession()
  console.log('🚀 ~ session:', session)
  const [currentUser, setCurrentUser] = useState<AppUser | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const fetchUser = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/users/${clerkUser?.id}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.statusText}`)
      }
      const result = await response.json()
      console.log('🚀 ~ fetchUser ~ result:', result)
      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch user data')
      }
      setCurrentUser({
        ...clerkUser,
        ...result.data,
      })
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Unknown error occurred'
      setError(errorMessage)
      console.error('Error fetching user:', errorMessage)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [clerkUser])
  useEffect(() => {
    if (clerkUser?.id && !currentUser) {
      fetchUser()
    }
  }, [clerkUser, fetchUser, currentUser])
  const reloadUser = () => {
    if (clerkUser?.id) {
      fetchUser()
    }
  }
  useEffect(() => {
    console.log('🚀 ~ useEffect ~ clerkUser:', clerkUser)
    if ((!clerkUser || !clerkUser.id) && currentUser) {
      console.log('User has signed out. Resetting current user state to null.')
      setCurrentUser(null)
    }
  }, [clerkUser, currentUser])
  return (
    <UserContext.Provider value={{currentUser, isLoading, error, reloadUser}}>
      {children}
    </UserContext.Provider>
  )
}
export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider')
  }
  return context
}
````

## File: src/db/models/users/users.ts
````typescript
"use server";
import { eq } from "drizzle-orm";
import { db } from "../../db";
import { users } from "../../schema";
import type { User } from "@/types/db";
export const getUsers = async () => {
	return await db.select().from(users);
};
export const getUserById = async (id: bigint) => {
	return await db.query.users.findFirst({
		where: eq(users.id, id),
		with: {
			punchCards: {
				with: {
					restaurant: true,
				},
			},
			achievements: true,
			pointBalances: true,
			raffleEntries: true,
		},
	});
};
export const getUserByClerkId = async (clerkId: string) => {
	const user = await db.query.users.findFirst({
		where: eq(users.clerkId, clerkId),
		with: {
			punchCards: {
				with: {
					restaurant: true,
				},
			},
			achievements: true,
			pointBalances: true,
			raffleEntries: true,
		},
	});
	console.log(user);
	return user;
};
export const getUserByClerkIdWithPunchCards = async (clerkId: string) => {
	const user = await db.query.users.findFirst({
		where: eq(users.clerkId, clerkId),
		with: {
			punchCards: {
				with: {
					restaurant: true,
				},
			},
			achievements: true,
			pointBalances: true,
			raffleEntries: true,
		},
	});
	console.log(user);
	return user;
};
export const createUser = async (data: {
	clerkId: string;
	name: string;
	email: string;
	isStaff?: boolean;
	isAdmin?: boolean;
}) => {
	return await db.insert(users).values(data).returning();
};
export const updateUser = async (
	id: bigint,
	data: Partial<{
		name: string;
		isStaff: boolean;
		isAdmin: boolean;
	}>,
) => {
	return await db.update(users).set(data).where(eq(users.id, id)).returning();
};
export const deleteUser = async (id: bigint) => {
	return await db.delete(users).where(eq(users.id, id)).returning();
};
````

## File: src/features/deals/DealsList.tsx
````typescript
"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Deal } from "@/types/db";
interface DatabaseDeal {
	id: bigint;
	restaurantId: bigint;
	title?: string;
	content: string;
	active: boolean | null;
	createdAt: string | null;
	updatedAt: string | null;
	name?: string;
	imageUrl?: string;
	restaurant?: {
		id: bigint;
		name: string;
		imageUrl?: string;
	};
}
interface DealsListProps {
	deals: DatabaseDeal[];
	className?: string;
}
export const DealsList = ({ deals, className }: DealsListProps) => {
	const [expandedId, setExpandedId] = useState<string | null>(null);
	const sortedDeals = useMemo(() => {
		return [...deals].sort((a, b) => {
			if (a.active && !b.active) return -1;
			if (!a.active && b.active) return 1;
			const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
			const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
			return dateB - dateA;
		});
	}, [deals]);
	if (!deals || deals.length === 0) {
		return (
			<div className={cn("py-8 text-center", className)}>
				<div className="bg-gray-50 dark:bg-zinc-900/50 rounded-lg p-6 max-w-md mx-auto">
					<Tag className="w-10 h-10 mx-auto text-gray-400 mb-3" />
					<h3 className="text-lg font-medium mb-2">No Deals Available</h3>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						There are currently no special deals or promotions available. Please
						check back later!
					</p>
				</div>
			</div>
		);
	}
	const toggleExpand = (id: string) => {
		setExpandedId(expandedId === id ? null : id);
	};
	return (
		<div className={cn("space-y-4", className)}>
			<div className="flex items-center mb-4">
				<Tag className="mr-2 h-5 w-5 text-blue-500" />
				<h2 className="text-xl font-semibold">Current Deals</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{sortedDeals.map((deal) => (
					<motion.div
						key={`${deal.id.toString()}-${deal.restaurantId.toString()}`}
						layout
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className={cn(
							"overflow-hidden rounded-lg",
							"bg-white dark:bg-zinc-900",
							"shadow-sm",
							"border border-gray-100 dark:border-zinc-800",
							"hover:shadow-md transition-all duration-200",
						)}
					>
						{}
						{deal.restaurant && (
							<Link
								href={`/restaurants/${deal.restaurantId}`}
								className="block"
							>
								<div className="flex items-center p-4 border-b border-gray-100 dark:border-zinc-800">
									{deal.restaurant.imageUrl && (
										<div className="relative w-12 h-12 mr-3 overflow-hidden rounded-full flex-shrink-0">
											<Image
												src={"/RWP.jpg"}
												alt={deal?.restaurant?.name || "Restaurant"}
												fill
												className="object-cover"
												sizes="48px"
											/>
										</div>
									)}
									<div>
										<h4 className="font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
											{deal.restaurant.name}
										</h4>
										<p className="text-xs text-gray-500 dark:text-gray-400">
											View restaurant details
										</p>
									</div>
								</div>
							</Link>
						)}
						<div className="p-5">
							<div className="flex justify-between items-start mb-2">
								<h3 className="font-semibold text-gray-900 dark:text-gray-100">
									{deal.title ||
										deal.name ||
										`${deal.content.substring(0, 40)}...`}
								</h3>
								{deal.active ? (
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
										Active
									</span>
								) : (
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
										Inactive
									</span>
								)}
							</div>
							<div className="mt-2">
								<p
									className={cn(
										"text-gray-700 dark:text-gray-300",
										"text-sm",
										expandedId === deal.id.toString() ? "" : "line-clamp-3",
									)}
								>
									{deal.content}
								</p>
								{deal.content.length > 150 && (
									<button
										type="button"
										onClick={() => toggleExpand(deal.id.toString())}
										className="mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
									>
										{expandedId === deal.id.toString()
											? "Show less"
											: "Read more"}
									</button>
								)}
							</div>
							<div className="mt-4 flex items-center justify-between">
								<div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
									<Clock className="mr-1 h-4 w-4" />
									<span>Limited time offer</span>
								</div>
								<Link
									href={`/restaurants/${deal.restaurantId}`}
									className="inline-flex items-center text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
								>
									View Restaurant <ExternalLink className="ml-1 h-3 w-3" />
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};
export const DealsListSkeleton = ({ count = 4 }: { count?: number }) => {
	const skeletonKeys = Array.from({ length: count }).map(
		(_, i) =>
			`deal-skeleton-${Math.random().toString(36).substring(2, 11)}-${i}`,
	);
	return (
		<div className="space-y-4">
			<div className="flex items-center mb-4">
				<div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded mr-2" />
				<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{skeletonKeys.map((key) => (
					<div
						key={key}
						className="rounded-lg border border-gray-100 dark:border-zinc-800 p-5 animate-pulse"
					>
						<div className="flex justify-between items-start mb-4">
							<div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
							<div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-16" />
						</div>
						<div className="space-y-2">
							<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
							<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
							<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
						</div>
						<div className="flex justify-between mt-4">
							<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
							<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
````

## File: src/features/prizes/prize-card/PrizeCard.tsx
````typescript
import Image from 'next/image';
export function PrizeCard({ prize }: { prize: any }) {
	return (
		<div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
			<div className="relative h-32 w-full mb-3">
				<Image
					src={
						prize.imageUrl || "https://via.placeholder.com/400x250?text=Prize"
					}
					alt={prize.name}
					fill
					className="object-cover rounded"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<h4 className="text-lg font-semibold mb-1">{prize.name}</h4>
			<p className="text-gray-600 text-sm mb-2 line-clamp-2">
				{prize.description}
			</p>
			<div className="flex justify-between items-center">
				<span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
					{prize.requiredPunches} punches
				</span>
				<span
					className={`text-sm font-medium px-2 py-1 rounded ${
						prize.available
							? "bg-green-100 text-green-800"
							: "bg-red-100 text-red-800"
					}`}
				>
					{prize.available ? "Available" : "Unavailable"}
				</span>
			</div>
		</div>
	);
}
````

## File: src/features/users/passport/index.tsx
````typescript
export * from './passport'
````

## File: src/features/users/passport/passport.tsx
````typescript
'use client'
import {Martini} from '@/components/icons/Martini'
import {ProgressIndicator} from '@/components/progress-indicator/progress-indicator'
import type {restaurants} from '@/db'
import {MAX_PUNCH_THRESHOLD} from '@/lib/constants'
import {cn} from '@/lib/utils'
import type {PunchCardWithRestaurant} from '@/types'
import {AnimatePresence, motion} from 'framer-motion'
import {Coffee, Pizza, Salad, Stamp, Wine} from 'lucide-react'
import type React from 'react'
import {useState} from 'react'
interface PassportProps {
  children?: React.ReactNode
  punches: PunchCardWithRestaurant[]
}
export function Passport({punches}: PassportProps) {
  const [activePunchCardData, setActivePunchCardData] = useState(punches[0])
  const currentPunches = punches.length
  const icons = [
    {
      id: 'stamp',
      icon: <Stamp className='h-5 w-5 stroke-black text-black' key='stamp' />,
    },
    {
      id: 'salad',
      icon: <Salad className='h-5 w-5 stroke-black text-black' key='salad' />,
    },
    {
      id: 'martini',
      icon: (
        <Martini className='h-5 w-5 stroke-black text-black' key='martini' />
      ),
    },
    {
      id: 'wine',
      icon: <Wine className='h-5 w-5 stroke-black text-black' key='wine' />,
    },
    {
      id: 'coffee',
      icon: <Coffee className='h-5 w-5 stroke-black text-black' key='coffee' />,
    },
    {
      id: 'pizza1',
      icon: <Pizza className='h-5 w-5 stroke-black text-black' key='pizza1' />,
    },
    {
      id: 'pizza2',
      icon: <Pizza className='h-5 w-5 stroke-black text-black' key='pizza2' />,
    },
  ]
  const punchesLeft = MAX_PUNCH_THRESHOLD - punches.length
  const emptyPunches = Array(punchesLeft).fill(null)
  const updateActivePunchCardData = (punchData: PunchCardWithRestaurant) => {
    setActivePunchCardData(punchData)
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        layout
        className={cn(
          'relative overflow-hidden rounded-xl bg-card shadow-lg passport',
          'w-full flex flex-col'
        )}
        style={{perspective: 1000}}
      >
        {}
        <div
          className='relative h-36 sm:h-48 w-full bg-gradient-to-r from-primary/80 to-primary'
          style={{
            backgroundImage: activePunchCardData ? 'url("/RWP.jpg")' : '',
            backgroundSize: 'contain',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
          <div className='absolute bottom-0 w-full p-4'>
            <h3 className='text-lg sm:text-xl font-bold text-white'>
              {activePunchCardData?.restaurant?.name}
            </h3>
            <p className='text-xs text-white/70'>
              Click any punch below to view details
            </p>
          </div>
        </div>
        {}
        <div className='flex flex-col p-4 sm:p-6'>
          <h4 className='text-base font-medium mb-4'>Your Restaurant</h4>
          {punches.length === 0 && (
            <div className='py-8 text-center text-muted-foreground'>
              You haven't earned any punches yet. Visit a restaurant to get
              started!
            </div>
          )}
          <div className='space-y-4'>
            <div
              className={cn(
                'grid gap-2 mb-5',
                MAX_PUNCH_THRESHOLD <= 5
                  ? 'grid-cols-5'
                  : MAX_PUNCH_THRESHOLD <= 8
                  ? 'grid-cols-4'
                  : 'grid-cols-5'
              )}
            >
              {}
              {punches.map((punchData, index) => (
                <motion.div
                  key={`punch-${punchData?.id}-${punchData.restaurant.id}`}
                  style={{
                    backgroundColor: '#ddd',
                    background: '#ddd',
                    border:
                      activePunchCardData?.id === punchData?.id
                        ? '2px solid #000'
                        : 'none',
                  }}
                  className={
                    'aspect-square rounded-lg border-2 flex items-center justify-center relative cursor-pointer'
                  }
                  onClick={() => updateActivePunchCardData(punchData)}
                  animate={{scale: [0, 1.2, 1], rotate: [0, 15, 0]}}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.15,
                  }}
                >
                  <motion.div
                    key={`icon-${punchData?.id}-${punchData.restaurant.id}`}
                    className='flex justify-center items-center'
                    initial={{scale: 0, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                      delay: index === currentPunches - 1 ? 0.2 : 0,
                    }}
                  >
                    {icons[index].icon}
                  </motion.div>
                </motion.div>
              ))}
              {punchesLeft > 0
                ? emptyPunches.map((emptyPunch, index) => (
                    <motion.div
                      key={`emptypunch-${index}`}
                      style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #ddd',
                      }}
                      className={
                        'bg-gray aspect-square rounded-lg border-2 flex items-center justify-center relative'
                      }
                      animate={{scale: [0, 1.2, 1], rotate: [0, 15, 0]}}
                      transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                        stiffness: 100,
                        damping: 15,
                        delay: index * 0.25,
                      }}
                    >
                      <motion.div
                        className='relative z-20 flex justify-center items-center'
                        initial={{scale: 0, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          delay: index * 0.2,
                        }}
                      >
                        <Stamp
                          className='h-5 w-5 stroke-black text-black'
                          key='stamp'
                        />
                      </motion.div>
                    </motion.div>
                  ))
                : null}
              {}
            </div>
          </div>
          <div className='flex items-center justify-start'>
            <ProgressIndicator punches={punches} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
````

## File: src/features/users/index.ts
````typescript
export * from "./UserPunchCard";
export * from "./UserPunchCards";
export * from "./UserScanQrCode";
````

## File: src/features/users/lottery-status.tsx
````typescript
import {
  CheckCircle,
  Circle,
  Flag,
  Clock,
  MoreHorizontal,
  Hexagon,
  CircleCheck,
  Stamp,
  LineChart,
} from 'lucide-react'
import React, {useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import type {PunchCardWithRestaurant} from '@/types/api'
import type {PunchCard} from '@/types'
export function LotteryStatus({
  punchCards,
}: {
  punchCards: PunchCardWithRestaurant[]
}) {
  console.log('🚀 ~ punchCards:', punchCards)
  const [percentageProgress, setPercentageProgress] = React.useState(0)
  const TOTAL_PUNCH_CARDS = 10
  const [currentPunchCards, setCurrentPunchCards] = React.useState(
    punchCards.length
  )
  const percentage = (currentPunchCards / TOTAL_PUNCH_CARDS) * 100
  const [isOpen, setIsOpen] = React.useState(false)
  const circleVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'linear',
      },
    },
  }
  useEffect(() => {
    setCurrentPunchCards(punchCards.length)
    setPercentageProgress(percentage)
  }, [punchCards])
  return (
    <main
      className='relative w-auto h-[300px] flex items-center justify-center px-4 py-10 '
      style={{justifySelf: 'start', alignSelf: 'start'}}
    >
      <div className='max-w-md w-full relative z-40'>
        <motion.div
          className='w-full bg-white rounded-xl p-4 shadow-lg border cursor-pointer'
          layoutId='card'
        >
          <div className='flex justify-between items-center mb-4'>
            <motion.div
              onClick={() => setIsOpen(!isOpen)}
              layoutId='card-title'
              className='flex items-center gap-2 bg-gray-100/70 rounded-lg p-1 pr-2'
            >
              <div className='size-8 border bg-white rounded-lg flex items-center justify-center p-1 text-gray-400 shadow-sm'>
                <Hexagon size={20} />
              </div>
              <span className='text-base font-medium'>Lottery Status</span>
            </motion.div>
            <div className='flex items-center gap-2 w-44 py-1.5 px-2'>
              <motion.div
                layoutId='progress-bar'
                className='flex-1 h-2 bg-gray-100 rounded-full'
              >
                <div
                  className='h-full bg-green-500 rounded-full'
                  style={{width: `${percentage}%`}}
                />
              </motion.div>
              <motion.span
                layoutId='progress-text'
                className='text-gray-600 text-sm'
              >
                {percentage.toFixed(0)}%
              </motion.span>
            </div>
          </div>
          <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-1.5'>
                <motion.div className='' layoutId='priority-icon'>
                  <Stamp className='text-gray-400 h-4 w-4' />
                </motion.div>
                <motion.span layoutId='priority-text' className='text-gray-600'>
                  Punches
                </motion.span>
              </div>
              <div className='flex items-center gap-1.5'>
                <motion.div className='' layoutId='status-icon'>
                  <LineChart className='text-gray-400 h-4 w-4' />
                </motion.div>
                <motion.span layoutId='status-text' className='text-gray-600'>
                  Progress
                </motion.span>
              </div>
            </div>
            <div className='flex -space-x-2'>
              {punchCards.map((punchCard: PunchCardWithRestaurant) => (
                <motion.div
                  key={punchCard.id}
                  layoutId={`avatar-${punchCard.restaurant.name}`}
                  className='size-9 shadow-sm rounded-full bg-blue-100 font-semibold border-2 border-white flex items-center justify-center text-xs'
                >
                  {punchCard.restaurant.name
                    .split(' ')
                    .map((word: any[]) => word[0])
                    .join('')}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <div className='absolute flex items-center justify-center inset-0'>
              <motion.div
                className='w-full relative bg-white rounded-xl p-4 shadow-lg border cursor-pointer overflow-hidden'
                layoutId='card'
              >
                <div className='flex justify-between items-center mb-4'>
                  <motion.div
                    layoutId='card-title'
                    className='flex items-center gap-2'
                  >
                    <div className='size-10 border rounded-lg flex items-center justify-center p-1 text-gray-400 shadow-sm'>
                      <Stamp size={24} />
                    </div>
                    <span className='text-xl font-semibold'>
                      Lottery Status
                    </span>
                  </motion.div>
                  <motion.button
                    className='text-gray-400 hover:text-gray-600 border rounded-md p-1'
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.5}}
                    transition={{duration: 0.3, delay: 0.1}}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <MoreHorizontal size={20} />
                  </motion.button>
                </div>
                <div className='mb-4'>
                  <motion.div className='flex items-center gap-2 mb-2 border py-1.5 px-2 w-2/3 rounded-full'>
                    <CircleCheck size={20} className='text-gray-600' />
                    <span className='text-gray-600 text-sm'>
                      {punchCards.length} of {TOTAL_PUNCH_CARDS}
                    </span>
                    <motion.div
                      layoutId='progress-bar'
                      className='flex-1 h-2 bg-gray-100 rounded-full'
                    >
                      <div
                        className='w-3/4 h-full bg-green-500 rounded-full'
                        style={{width: `${percentage}%`}}
                      ></div>
                    </motion.div>
                    <motion.span
                      layoutId='progress-text'
                      className='text-gray-600 text-sm'
                    >
                      {percentage.toFixed(0)}%
                    </motion.span>
                  </motion.div>
                  <div className='space-y-3 pl-7 pt-2'>
                    {punchCards.map((punchCard: PunchCard) => (
                      <motion.div
                        key={punchCard.id}
                        className='flex items-center gap-2'
                        initial={{opacity: 0, x: -10}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -10}}
                        transition={{duration: 0.3, delay: 0.1}}
                      >
                        <Stamp size={18} className='text-gray-400 h-4 w-4' />
                        <span className='text-gray-600'>
                          {punchCard.restaurant?.name}
                        </span>
                        <span className='text-xs text-gray-400 ml-auto'>
                          {new Date(punchCard.updatedAt).toLocaleDateString()}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className='space-y-2'>
                  <div className='flex items-center gap-2'>
                    <motion.div className='' layoutId='priority-icon'>
                      <Flag size={16} className='text-gray-400' />
                    </motion.div>
                    <motion.span
                      layoutId='priority-text'
                      className='text-gray-600 w-20'
                    >
                      Priority
                    </motion.span>
                    <motion.span
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      exit={{opacity: 0, y: 10}}
                      transition={{duration: 0.3, delay: 0.2}}
                      className='px-2 py-0.5 border border-red-600/20 bg-red-50 text-red-600 rounded-md text-sm'
                    >
                      Urgent
                    </motion.span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <motion.div className='' layoutId='status-icon'>
                      <Clock size={16} className='text-gray-400' />
                    </motion.div>
                    <motion.span
                      layoutId='status-text'
                      className='text-gray-600 w-20'
                    >
                      Status
                    </motion.span>
                    <motion.span
                      initial={{opacity: 0, y: 10}}
                      animate={{opacity: 1, y: 0}}
                      exit={{opacity: 0, y: 10}}
                      transition={{duration: 0.3, delay: 0.3}}
                      className='px-2 py-0.5 border border-yellow-600/20 bg-yellow-50 text-yellow-600 rounded-md text-sm'
                    >
                      In Progress
                    </motion.span>
                  </div>
                </div>
                <motion.div
                  initial={{x: 40, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  exit={{x: 40, opacity: 0}}
                  transition={{duration: 0.3, delay: 0.1}}
                  className='absolute size-80 bottom-7 border-dashed -right-40 border rounded-full'
                />
                <motion.div
                  initial={{x: 40, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  exit={{x: 40, opacity: 0}}
                  transition={{duration: 0.3, delay: 0.2}}
                  className='absolute size-60 bottom-7 border-dashed -right-[120px] border rounded-full'
                />
                <motion.div
                  initial={{x: 40, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  exit={{x: 40, opacity: 0}}
                  transition={{duration: 0.3, delay: 0.3}}
                  className='absolute size-40 bottom-7 border-dashed -right-20 border rounded-full'
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        variants={circleVariants}
        animate='animate'
        className='absolute size-80 border-dashed border border-gray-200 rounded-full'
        style={{transformOrigin: 'center bottom'}}
      />
      <motion.div
        variants={circleVariants}
        animate='animate'
        className='absolute size-60 border-dashed border border-gray-200 rounded-full'
        style={{transformOrigin: 'center bottom'}}
      />
      <motion.div
        variants={circleVariants}
        animate='animate'
        className='absolute size-40 border-dashed border border-gray-200 rounded-full'
        style={{transformOrigin: 'center bottom'}}
      />
    </main>
  )
}
````

## File: src/hooks/use-mobile.tsx
````typescript
"use client";
import * as React from "react";
const MOBILE_BREAKPOINT = 768;
export function useIsMobile() {
	const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
		undefined,
	);
	React.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
````

## File: src/types/schemas.ts
````typescript
import { z } from "zod";
import type {
	User,
	Restaurant,
	PunchCard,
	Prize,
	PrizeRedemption,
	PointTransfer,
	Achievement,
} from "./db";
export const dealSchema = z.object({
	id: z.bigint(),
	name: z.string(),
	description: z.string(),
	imageUrl: z.string().url(),
	restaurantId: z.bigint(),
});
export const createDealSchema = dealSchema.omit({
	id: true,
});
export const userSchema = z.object({
	id: z.bigint(),
	clerkId: z.string(),
	name: z.string(),
	isStaff: z.boolean(),
	isAdmin: z.boolean(),
	email: z.string().email(),
	phone: z.string().nullable(),
});
export const createUserSchema = userSchema
	.omit({
		id: true,
		isStaff: true,
		isAdmin: true,
	})
	.extend({
		isStaff: z.boolean().optional(),
		isAdmin: z.boolean().optional(),
	});
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type CreateRestaurantInput = z.infer<typeof createRestaurantSchema>;
export const punchCardSchema = z.object({
	id: z.bigint(),
	userId: z.bigint(),
	restaurantId: z.bigint(),
	punches: z.number().int().min(0),
	completed: z.boolean(),
	updatedAt: z.date(),
});
export const createPunchCardSchema = punchCardSchema.omit({
	id: true,
	punches: true,
	completed: true,
	updatedAt: true,
});
export type CreatePunchCardInput = z.infer<typeof createPunchCardSchema>;
export const prizeRulesSchema = z
	.object({
		expirationDays: z.number().int().min(1).optional(),
		usageLimit: z.number().int().min(1).optional(),
		terms: z.string().optional(),
	})
	.catchall(z.unknown());
export const prizeSchema = z.object({
	id: z.bigint(),
	name: z.string(),
	description: z.string(),
	imageUrl: z.string().url(),
	type: z.string(),
	restaurantId: z.bigint(),
	requiredPunches: z.number().int().min(1),
	available: z.boolean(),
	quantity: z.number().int().min(0),
	rules: prizeRulesSchema,
	createdAt: z.date(),
});
export const createPrizeSchema = prizeSchema.omit({
	id: true,
	createdAt: true,
});
export type CreatePrizeInput = z.infer<typeof createPrizeSchema>;
export const redemptionStatusSchema = z.enum([
	"pending",
	"redeemed",
	"expired",
	"cancelled",
]);
export const prizeRedemptionSchema = z.object({
	id: z.bigint(),
	userId: z.bigint(),
	prizeId: z.bigint(),
	punchCardId: z.bigint(),
	status: redemptionStatusSchema,
	redeemedAt: z.date().nullable(),
	expiresAt: z.date().nullable(),
	createdAt: z.date(),
});
export const createPrizeRedemptionSchema = prizeRedemptionSchema
	.omit({
		id: true,
		status: true,
		redeemedAt: true,
		createdAt: true,
	})
	.extend({
		status: redemptionStatusSchema.default("pending"),
	});
export type CreatePrizeRedemptionInput = z.infer<
	typeof createPrizeRedemptionSchema
>;
export const transferStatusSchema = z.enum([
	"pending",
	"completed",
	"cancelled",
]);
export const pointTransferSchema = z.object({
	id: z.bigint(),
	fromUserId: z.bigint(),
	toUserId: z.bigint(),
	points: z.number().int().positive(),
	message: z.string().nullable(),
	status: transferStatusSchema,
	createdAt: z.date(),
});
export const createPointTransferSchema = pointTransferSchema
	.omit({
		id: true,
		status: true,
		createdAt: true,
	})
	.extend({
		status: transferStatusSchema.default("pending"),
		message: z.string().max(200).optional().nullable(),
	});
export type CreatePointTransferInput = z.infer<
	typeof createPointTransferSchema
>;
export const achievementTypeSchema = z.enum([
	"first_transfer",
	"transfer_milestone",
	"punch_card_complete",
	"prize_redemption",
]);
export const achievementDataSchema = z
	.object({
		milestone: z.number().optional(),
		restaurantId: z.bigint().optional(),
		prizeId: z.bigint().optional(),
	})
	.catchall(z.unknown());
export const achievementSchema = z.object({
	id: z.bigint(),
	userId: z.bigint(),
	type: achievementTypeSchema,
	data: achievementDataSchema,
	unlockedAt: z.date(),
});
export const createAchievementSchema = achievementSchema.omit({
	id: true,
	unlockedAt: true,
});
export type CreateAchievementInput = z.infer<typeof createAchievementSchema>;
export const restaurantSchema = z.object({
	id: z.bigint(),
	name: z.string(),
	description: z.string(),
	imageUrl: z.string().url(),
	address: z.string(),
	qrCodeUrl: z.string().url().nullable(),
	punchCardCount: z.number().int().min(0).optional(),
	dealCount: z.number().int().min(0).optional(),
	prizeCount: z.number().int().min(0).optional(),
	prizes: z.array(prizeSchema).optional(),
	punchCards: z.array(punchCardSchema).optional(),
	deals: z.array(dealSchema).optional(),
});
export const createRestaurantSchema = restaurantSchema.omit({
	id: true,
	qrCodeUrl: true,
});
````

## File: src/actions/scan-actions.ts
````typescript
"use server";
import {
	createPunchCard,
	getUserPunchCardForRestaurant,
	incrementPunchCard,
} from "@/db/models/punch-cards/punch-cards";
import { getRestaurantById } from "@/db/models/restaurants/restaurants";
import { getUserByClerkId } from "@/db/models/users/users";
import { convertBigInts } from "@/lib/utils";
export async function processQrScan(formData: {
	qrData: string;
	userId: string | number | bigint;
}) {
	const { qrData, userId } = formData;
	console.log("🚀 ~ processQrScan received qrData:", qrData);
	try {
		let qrDataString = qrData;
		if (
			typeof qrData === "string" &&
			(qrData.startsWith("{") || qrData.startsWith("["))
		) {
			try {
				const parsed = JSON.parse(qrData);
				if (parsed && typeof parsed === "object") {
					if ("text" in parsed) {
						qrDataString = parsed.text;
					} else if ("data" in parsed) {
						qrDataString = parsed.data;
					} else if ("url" in parsed) {
						qrDataString = parsed.url;
					}
				}
			} catch (parseError) {
				console.log("Failed to parse QR data as JSON, using as-is");
			}
		}
		console.log("🚀 ~ Processing QR data as:", qrDataString);
			const restaurantId = qrDataString.match(/restaurants\/(\d+)\/scan/)?.[1] ?? "";
			console.log("🚀 ~ restaurantId:", restaurantId)
		console.log("🚀 ~ POST ~ restaurantId:", restaurantId);
		const numericRestaurantId = restaurantId?.replace(/\D/g, "");
		console.log("🚀 ~ numericRestaurantId:", numericRestaurantId)
		// Parse the QR URL to extract restaurant ID
		// const qrCodeUrl = new URL(qrDataString);
		// console.log("🚀 ~ qrCodeUrl:", qrCodeUrl);
		// const pathname = qrCodeUrl.pathname;
		// // Extract only numeric part from the path to ensure valid BigInt conversion
		// const pathParts = pathname.split("/").filter(Boolean);
		// const restaurantId = pathParts.pop();
		// const numericRestaurantId = restaurantId?.replace(/\D/g, "");
		// console.log("🚀 ~ Extracted restaurant ID:", numericRestaurantId);
		if (!numericRestaurantId || !userId) {
			return {
				error: "Missing required parameters",
				message: "User ID and restaurant ID are required",
				status: 400,
			};
		}
		console.log("Processing userId:", userId, "Type:", typeof userId);
		let userIdBigInt: bigint;
		if (typeof userId === "bigint") {
			userIdBigInt = userId;
		} else {
			const userIdStr = String(userId).trim();
			console.log("userId as string:", userIdStr);
			if (!/^\d+$/.test(userIdStr)) {
				console.log(
					"userId appears to be a Clerk ID, fetching database user ID",
				);
				const user = await getUserByClerkId(userIdStr);
				if (!user || !user.id) {
					throw new Error(`User not found with Clerk ID: ${userIdStr}`);
				}
				console.log("Found user in database with ID:", user.id);
				userIdBigInt = user.id;
			} else {
				userIdBigInt = BigInt(userIdStr);
			}
		}
		console.log(
			"Successfully resolved userId to BigInt:",
			userIdBigInt.toString(),
		);
		console.log(
			"Converting restaurantId to BigInt:",
			numericRestaurantId,
			"Type:",
			typeof numericRestaurantId,
		);
		if (!numericRestaurantId || !/^\d+$/.test(numericRestaurantId)) {
			throw new Error(`Invalid restaurant ID format: ${numericRestaurantId}`);
		}
		const restaurantIdBigInt = BigInt(numericRestaurantId);
		console.log("Successfully converted to BigInt");
		const restaurant = await getRestaurantById(restaurantIdBigInt);
		const punchCardExists = await getUserPunchCardForRestaurant(
			userIdBigInt,
			restaurantIdBigInt,
		);
		console.log("🚀 ~ punchCardExists:", punchCardExists)
		if (punchCardExists) {
			console.log("🚀 ~ punchCardExists:", punchCardExists)
			return {
				message: "Punch card already exists and was updated",
				data: convertBigInts( punchCardExists),
				restaurantName: restaurant?.name || "Restaurant",
				isExisting: true,
			};
		} else {
			const punchCard = await createPunchCard({
				userId: userIdBigInt,
				restaurantId: restaurantIdBigInt,
				punches: 1,
				completed: true,
			}).then((res) => res[0]);
			console.log("🚀 ~ punchCard:", punchCard)
			return {
				message: "Punch card created successfully",
				data: convertBigInts(punchCard),
				restaurantName: restaurant?.name || "Restaurant",
				isExisting: false,
			};
		}
	} catch (error) {
		console.error("Error processing QR scan:", error);
		if (error instanceof Error && error.message.includes("BigInt")) {
			return {
				error: "Invalid data format",
				message: "The QR code contains invalid restaurant ID format",
				status: 400,
			};
		}
		if (error instanceof Error && error.message.includes("User not found")) {
			return {
				error: "User not found",
				message: error.message,
				status: 404,
			};
		}
		return {
			error: "Failed to process QR scan",
			message: (error as Error).message,
			status: 500,
		};
	}
}
````

## File: src/app/(public)/restaurants/[id]/page.tsx
````typescript
import { Restaurant } from "@/features/restaurants/Restaurant";
import { UserFacingRestaurantDetail } from "@/features/restaurants/UserFacingRestaurantDetail";
export default async function RestaurantPage({
	params,
}: { params: Promise<{ id: string }> }) {
	const resolvedParams = await params;
	return <UserFacingRestaurantDetail params={resolvedParams} />;
}
````

## File: src/app/api/restaurants/[id]/scan/route.ts
````typescript
import {
	createPunchCard,
	getUserPunchCardForRestaurant,
	incrementPunchCard,
} from "@/db/models/punch-cards/punch-cards";
import { getRestaurantById } from "@/db/models/restaurants/restaurants";
import { PUNCH_THRESHOLD } from "@/components/ui/restaurant-specific-user-punch-card";
import type { PunchCard } from "@/types/db";
const safeJson = (data: unknown) =>
	JSON.stringify(data, (_, value) =>
		typeof value === "bigint" ? value.toString() : value,
	);
export async function POST(request: Request) {
	console.log("🚀 ~ POST ~ request:", request);
	try {
		const restaurantId =
			request.url.match(/restaurants\/(\d+)\/scan/)?.[1] ?? "";
		console.log("🚀 ~ POST ~ restaurantId:", restaurantId);
		// Parse request body
		const body = await request.json();
		console.log("🚀 ~ POST ~ body:", body);
		if (!restaurantId || !body?.userId) {
			return new Response(
				safeJson({
					message: "Missing required data",
					error: "Restaurant ID and user ID are required",
				}),
				{ status: 400, headers: { "Content-Type": "application/json" } },
			);
		}
		const userId: string | number = body.userId;
		console.log("🚀 ~ POST ~ userId:", userId);
		const restaurant = await getRestaurantById(BigInt(restaurantId));
		if (!restaurant) {
			return new Response(
				safeJson({
					message: "Restaurant not found",
					error: "The restaurant does not exist",
				}),
				{ status: 404, headers: { "Content-Type": "application/json" } },
			);
		}
		const existingPunchCard = await getUserPunchCardForRestaurant(
			BigInt(userId),
			BigInt(restaurantId),
		);
		console.log("🚀 ~ POST ~ existingPunchCard:", existingPunchCard);
		let punchCardData: PunchCard | null = null;
		let isExisting = false;
		if (existingPunchCard) {
			isExisting = true;
			const incrementResult = await incrementPunchCard(existingPunchCard.id);
			if (!incrementResult || incrementResult.length === 0) {
				throw new Error("Failed to increment punch card");
			}
			punchCardData = incrementResult[0];
			console.log("🚀 ~ POST ~ incrementedCard:", punchCardData);
		} else {
			const createResult = await createPunchCard({
				userId: BigInt(userId),
				restaurantId: BigInt(restaurantId),
				punches: 1,
				completed: false,
			});
			if (!createResult || createResult.length === 0) {
				throw new Error("Failed to create punch card");
			}
			punchCardData = createResult[0];
			console.log("🚀 ~ POST ~ newCard:", punchCardData);
		}
		if (!punchCardData) {
			throw new Error("Punch card data is missing");
		}
		const isCompleted = (punchCardData.punches ?? 0) >= PUNCH_THRESHOLD;
		if (isCompleted && !punchCardData.completed) {
		}
		return new Response(
			safeJson({
				message: isExisting
					? "Punch added to existing card"
					: "New punch card created",
				data: {
					...punchCardData,
					restaurantId,
					restaurantName: restaurant.name,
					punches: punchCardData.punches ?? 0,
				},
				isExisting,
				restaurantName: restaurant.name,
				status: 200,
			}),
			{
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (error) {
		console.error("Error in scan route:", error);
		return new Response(
			safeJson({
				message: "Failed to process scan",
				error: error instanceof Error ? error.message : "Unknown error",
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
}
````

## File: src/components/admin/deals/edit-deal-form.tsx
````typescript
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Deal } from "@/types/db";
import {
	getRestaurants,
	updateRestaurantDeal,
} from "@/db/models/restaurants/restaurants";
import { toast } from "sonner";
type SimpleRestaurant = {
	id: bigint;
	name: string;
};
interface EditDealFormProps {
	id: string;
	deal: Deal & { restaurant?: { id: bigint; name: string } };
}
export function EditDealForm({ id, deal }: EditDealFormProps) {
	const router = useRouter();
	const [restaurants, setRestaurants] = useState<SimpleRestaurant[]>([]);
	const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(true);
	const [formData, setFormData] = useState({
		title: deal.title,
		content: deal.content,
		imageUrl: deal.imageUrl || "",
		active: deal.active,
		restaurantId: String(deal.restaurantId),
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	// Fetch restaurants for the dropdown
	useEffect(() => {
		const fetchRestaurants = async () => {
			try {
				setIsLoadingRestaurants(true);
				const restaurantsList = await getRestaurants();
				// Simplify the restaurant data to only what we need for the dropdown
				const simpleRestaurants = restaurantsList.map((restaurant) => ({
					id: restaurant.id,
					name: restaurant.name,
				}));
				setRestaurants(simpleRestaurants);
			} catch (err) {
				console.error("Error fetching restaurants:", err);
				setError("Failed to load restaurants");
			} finally {
				setIsLoadingRestaurants(false);
			}
		};
		fetchRestaurants();
	}, []);
	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value, type } = e.target;
		if (type === "checkbox") {
			const checkbox = e.target as HTMLInputElement;
			setFormData({
				...formData,
				[name]: checkbox.checked,
			});
		} else {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);
		try {
			if (!formData.title.trim()) {
				throw new Error("Title is required");
			}
			if (!formData.content.trim()) {
				throw new Error("Content is required");
			}
			if (!formData.restaurantId) {
				throw new Error("Restaurant selection is required");
			}
			await updateRestaurantDeal(BigInt(id), {
				title: formData.title,
				content: formData.content,
				active: formData.active,
				restaurantId: BigInt(formData.restaurantId),
			});
			toast.success("Deal updated", {
				description: "The deal has been successfully updated.",
			});
			router.push(`/admin/deals/${id}`);
			router.refresh();
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to update deal");
			toast.error("Error", {
				description: "Failed to update the deal. Please try again.",
			});
			setIsSubmitting(false);
		}
	};
	if (error && !isSubmitting) {
		return (
			<div className="bg-red-50 border-l-4 border-red-500 p-4">
				<div className="flex">
					<div>
						<p className="text-sm text-red-700">{error}</p>
						<p className="mt-2">
							<button
								type="button"
								onClick={() => router.back()}
								className="text-red-700 hover:text-red-600 font-medium underline"
							>
								Go back
							</button>
						</p>
					</div>
				</div>
			</div>
		);
	}
	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{error && (
				<div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
					<div className="flex">
						<div>
							<p className="text-sm text-red-700">{error}</p>
						</div>
					</div>
				</div>
			)}
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{}
				<div className="col-span-2">
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700"
					>
						Deal Title <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="title"
						name="title"
						value={formData.title}
						onChange={handleChange}
						className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#818cf8] focus:outline-none focus:ring-1 focus:ring-[#818cf8] sm:text-sm"
						placeholder="e.g., 'Happy Hour Special' or 'Weekend Brunch Offer'"
						required
					/>
				</div>
				{}
				<div className="col-span-2">
					<label
						htmlFor="content"
						className="block text-sm font-medium text-gray-700"
					>
						Deal Description <span className="text-red-500">*</span>
					</label>
					<textarea
						id="content"
						name="content"
						value={formData.content}
						onChange={handleChange}
						rows={4}
						className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#818cf8] focus:outline-none focus:ring-1 focus:ring-[#818cf8] sm:text-sm"
						placeholder="Describe the deal in detail, including terms and conditions"
						required
					/>
				</div>
				{}
				<div>
					<label
						htmlFor="restaurantId"
						className="block text-sm font-medium text-gray-700"
					>
						Restaurant <span className="text-red-500">*</span>
					</label>
					<select
						id="restaurantId"
						name="restaurantId"
						value={formData.restaurantId}
						onChange={handleChange}
						className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#818cf8] focus:outline-none focus:ring-1 focus:ring-[#818cf8] sm:text-sm"
						required
						disabled={isLoadingRestaurants}
					>
						<option value="">Select Restaurant</option>
						{restaurants.map((restaurant) => (
							<option key={String(restaurant.id)} value={String(restaurant.id)}>
								{restaurant.name}
							</option>
						))}
					</select>
					{isLoadingRestaurants && (
						<p className="mt-1 text-xs text-gray-500">Loading restaurants...</p>
					)}
				</div>
				{}
				<div>
					<label
						htmlFor="imageUrl"
						className="block text-sm font-medium text-gray-700"
					>
						Image URL
					</label>
					<input
						type="text"
						id="imageUrl"
						name="imageUrl"
						value={formData.imageUrl}
						onChange={handleChange}
						className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#818cf8] focus:outline-none focus:ring-1 focus:ring-[#818cf8] sm:text-sm"
						placeholder="https://example.com/images/deal.jpg"
					/>
					<p className="mt-1 text-xs text-gray-500">
						Enter a URL for an image that represents this deal
					</p>
				</div>
				{}
				<div className="col-span-2">
					<div className="flex items-center">
						<input
							type="checkbox"
							id="active"
							name="active"
							checked={formData.active}
							onChange={handleChange}
							className="h-4 w-4 rounded border-gray-300 text-[#818cf8] focus:ring-[#818cf8]"
						/>
						<label
							htmlFor="active"
							className="ml-2 block text-sm text-gray-700"
						>
							Active (immediately visible to users)
						</label>
					</div>
					<p className="mt-1 text-xs text-gray-500">
						If unchecked, the deal will be saved but not visible to users
					</p>
				</div>
			</div>
			{}
			<div className="flex justify-end space-x-3 pt-5">
				<button
					type="button"
					onClick={() => router.back()}
					className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#818cf8] focus:ring-offset-2"
				>
					Cancel
				</button>
				<button
					type="submit"
					disabled={isSubmitting}
					className="inline-flex justify-center rounded-md border border-transparent bg-[#818cf8] px-4 py-2 text-sm font-medium text-white hover:bg-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#818cf8] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? "Saving..." : "Save Changes"}
				</button>
			</div>
		</form>
	);
}
````

## File: src/components/ui/in-view.tsx
````typescript
'use client'
import {type ReactNode, useRef} from 'react'
import {motion} from 'framer-motion'
import {useInView, type Variant} from 'framer-motion'
import type {Transition} from 'framer-motion'
import type {UseInViewOptions} from 'framer-motion'
export type InViewProps = {
  children: ReactNode
  variants?: {
    hidden: Variant
    visible: Variant
  }
  transition?: Transition
  viewOptions?: UseInViewOptions
  as?: React.ElementType
}
const defaultVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
}
export function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  as = 'div',
}: InViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, viewOptions)
  const MotionComponent = motion[as as keyof typeof motion] as typeof as
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
````

## File: src/db/relations.ts
````typescript
import { relations } from "drizzle-orm/relations";
import {
	users,
	achievements,
	pointBalances,
	pointTransfers,
	prizes,
	prizeRedemptions,
	punchCards,
	restaurants,
	raffleEntries,
	restaurantDeals,
} from "./schema";
export const achievementsRelations = relations(achievements, ({ one }) => ({
	user: one(users, {
		fields: [achievements.userId],
		references: [users.id],
	}),
}));
export const usersRelations = relations(users, ({ many }) => ({
	achievements: many(achievements),
	pointBalances: many(pointBalances),
	pointTransfers_fromUserId: many(pointTransfers, {
		relationName: "pointTransfers_fromUserId_users_id",
	}),
	pointTransfers_toUserId: many(pointTransfers, {
		relationName: "pointTransfers_toUserId_users_id",
	}),
	prizeRedemptions: many(prizeRedemptions),
	raffleEntries: many(raffleEntries),
	punchCards: many(punchCards),
}));
export const pointBalancesRelations = relations(pointBalances, ({ one }) => ({
	user: one(users, {
		fields: [pointBalances.userId],
		references: [users.id],
	}),
}));
export const pointTransfersRelations = relations(pointTransfers, ({ one }) => ({
	user_fromUserId: one(users, {
		fields: [pointTransfers.fromUserId],
		references: [users.id],
		relationName: "pointTransfers_fromUserId_users_id",
	}),
	user_toUserId: one(users, {
		fields: [pointTransfers.toUserId],
		references: [users.id],
		relationName: "pointTransfers_toUserId_users_id",
	}),
}));
export const prizeRedemptionsRelations = relations(
	prizeRedemptions,
	({ one }) => ({
		prize: one(prizes, {
			fields: [prizeRedemptions.prizeId],
			references: [prizes.id],
		}),
		punchCard: one(punchCards, {
			fields: [prizeRedemptions.punchCardId],
			references: [punchCards.id],
		}),
		user: one(users, {
			fields: [prizeRedemptions.userId],
			references: [users.id],
		}),
	}),
);
export const prizesRelations = relations(prizes, ({ one, many }) => ({
	prizeRedemptions: many(prizeRedemptions),
	restaurant: one(restaurants, {
		fields: [prizes.restaurantId],
		references: [restaurants.id],
	}),
}));
export const punchCardsRelations = relations(punchCards, ({ one, many }) => ({
	prizeRedemptions: many(prizeRedemptions),
	raffleEntries: many(raffleEntries),
	restaurant: one(restaurants, {
		fields: [punchCards.restaurantId],
		references: [restaurants.id],
	}),
	user: one(users, {
		fields: [punchCards.userId],
		references: [users.id],
	}),
}));
export const restaurantDealsRelations = relations(
	restaurantDeals,
	({ one }) => ({
		restaurant: one(restaurants, {
			fields: [restaurantDeals.restaurantId],
			references: [restaurants.id],
		}),
	}),
);
export const restaurantsRelations = relations(restaurants, ({ many }) => ({
	deals: many(restaurantDeals),
	punchCards: many(punchCards),
	prizes: many(prizes),
}));
export const raffleEntriesRelations = relations(raffleEntries, ({ one }) => ({
	punchCard: one(punchCards, {
		fields: [raffleEntries.punchCardId],
		references: [punchCards.id],
	}),
	user: one(users, {
		fields: [raffleEntries.userId],
		references: [users.id],
	}),
}));
````

## File: src/features/restaurants/RestaurantSearchBar.tsx
````typescript
"use client";
import type { ChangeEvent } from "react";
import { Search, ArrowUpDown, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { SortOption } from "@/hooks/useRestaurantSearch";
export interface RestaurantSearchBarProps {
	searchTerm: string;
	onSearchChange: (term: string) => void;
	sortOption: SortOption;
	onSortChange: (option: SortOption) => void;
	hasDeals: boolean;
	onDealsChange: (hasDeals: boolean) => void;
	className?: string;
}
export function RestaurantSearchBar({
	searchTerm,
	onSearchChange,
	sortOption,
	onSortChange,
	hasDeals,
	onDealsChange,
	className = "",
}: RestaurantSearchBarProps) {
	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		onSearchChange(e.target.value);
	};
	const handleSortChange = (value: string) => {
		onSortChange(value as SortOption);
	};
	const handleDealsChange = (checked: boolean) => {
		onDealsChange(checked);
	};
	return (
		<div className={`flex flex-col md:flex-row gap-3 w-full mb-6 ${className}`}>
			<div className="relative flex-grow">
				<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
				<Input
					type="text"
					placeholder="Search restaurants..."
					value={searchTerm}
					onChange={handleSearchChange}
					className="pl-8 w-full"
				/>
			</div>
			<div className="flex items-center gap-4">
				<div className="flex items-center space-x-2">
					<Tag className="h-4 w-4 text-gray-500" />
					<Label htmlFor="has-deals" className="text-sm">
						Has Deals
					</Label>
					<Switch
						id="has-deals"
						checked={hasDeals}
						onCheckedChange={handleDealsChange}
					/>
				</div>
				<div className="flex items-center gap-2">
					<ArrowUpDown className="h-4 w-4 text-gray-500" />
					<Select value={sortOption} onValueChange={handleSortChange}>
						<SelectTrigger className="w-[160px]">
							<SelectValue placeholder="Sort by" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="name-asc">Name (A-Z)</SelectItem>
							<SelectItem value="name-desc">Name (Z-A)</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	);
}
````

## File: src/hooks/index.ts
````typescript
export * from "./useRestaurantSearch";
export * from "./use-geolocation";
export * from "./use-handle-qrCode";
export * from "./use-mobile";
export * from "./use-scan-qr-code";
export * from "./use-server-sent-event";
export * from "./use-websocket";
export * from "./use-punch-card-subscription";
````

## File: src/hooks/use-geolocation.tsx
````typescript
"use client";
import { useState, useEffect } from "react";
export const useGeolocation = () => {
	const [coords, setCoords] = useState<GeolocationCoordinates | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		if (typeof window === 'undefined') return;
		const handleGetLocation = () => {
			if (!navigator.geolocation) {
				setError("Geolocation not supported");
				return;
			}
			setLoading(true);
			setError(null);
			const options = {
				enableHighAccuracy: false,
				timeout: 5000,
				maximumAge: 300000
			};
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCoords(position.coords);
					setLoading(false);
				},
				(err) => {
					setError(err.message);
					setLoading(false);
				},
				options
			);
		};
		const timer = setTimeout(handleGetLocation, 1000);
		return () => clearTimeout(timer);
	}, []);
	return { coords, error, loading };
};
````

## File: src/lib/utils.ts
````typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function toBigInt(value: string | number) {
	return BigInt(value);
}
export function toNumber(value: string | number) {
	return Number(value);
}
export function convertBigInts<T>(
	obj: T,
	dataType: "number" | "string" = "number",
): T {
	if (Array.isArray(obj)) {
		return obj.map((item) => convertBigInts(item, dataType)) as unknown as T;
	}
	if (obj && typeof obj === "object" && !Array.isArray(obj)) {
		return Object.entries(obj).reduce((acc, [key, value]) => {
			acc[key as keyof typeof acc] =
				typeof value === "bigint"
					? dataType === "number"
						? Number(value)
						: value.toString()
					: value instanceof Object
						? convertBigInts(value, dataType)
						: value;
			return acc;
		}, {} as T);
	}
	return obj;
}
export function convertBigIntToString<T>(data: T): T {
	if (data === null || data === undefined) {
		return data;
	}
	if (typeof data === "bigint") {
		return String(data) as unknown as T;
	}
	if (Array.isArray(data)) {
		return data.map(convertBigIntToString) as unknown as T;
	}
	if (typeof data === "object") {
		return Object.fromEntries(
			Object.entries(data).map(([key, value]) => [
				key,
				convertBigIntToString(value),
			]),
		) as unknown as T;
	}
	return data;
}
````

## File: src/types/api.ts
````typescript
import type {
	User,
	Restaurant,
	PunchCard,
	Prize,
	PrizeRedemption,
	PointBalance,
	PointTransfer,
	Achievement,
} from "./db";
export type ApiResponse<T = unknown> = {
	success: boolean;
	data?: T;
	error?: string;
	message?: string;
};
export type PaginationMeta = {
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
	hasMore: boolean;
};
export type PaginatedApiResponse<T = unknown> = ApiResponse<{
	items: T[];
	meta: PaginationMeta;
}>;
export type PaginationParams = {
	page?: number;
	pageSize?: number;
};
export type UserWithPointBalance = User & {
	pointBalance: PointBalance;
};
export type UserProfileResponse = ApiResponse<{
	user: UserWithPointBalance;
	punchCards: PunchCard[];
	achievements: Achievement[];
}>;
export type RestaurantWithPrizes = Restaurant & {
	prizes: Prize[];
};
export type RestaurantDetailResponse = ApiResponse<RestaurantWithPrizes>;
export type PointTransferWithUsers = PointTransfer & {
	fromUser: {
		id: bigint;
		name: string;
	};
	toUser: {
		id: bigint;
		name: string;
	};
};
export type PunchCardWithRestaurant = PunchCard & {
	restaurant: Restaurant;
};
export type PrizeRedemptionWithDetails = PrizeRedemption & {
	prize: Prize;
	restaurant: {
		id: bigint;
		name: string;
		imageUrl: string;
	};
};
export type QrCodePayload =
	| {
			type: "punch_card";
			userId: string;
			restaurantId: string;
	  }
	| {
			type: "prize_redemption";
			redemptionId: string;
	  };
export type RestaurantAnalytics = {
	totalPunchCards: number;
	completedPunchCards: number;
	activeUsers: number;
	prizeRedemptions: number;
	dailyStats: Array<{
		date: string;
		punches: number;
		completions: number;
		redemptions: number;
	}>;
};
export type LeaderboardEntry = {
	userId: bigint;
	userName: string;
	points: number;
	rank: number;
};
export type AdminDashboardStats = {
	totalUsers: number;
	totalRestaurants: number;
	MAX_PUNCH_THRESHOLD: number;
	totalPrizeRedemptions: number;
	activeUsersLast30Days: number;
};
export type UserLeaderboardEntry = {
	userId: bigint;
	userName: string;
	punchCardCount: number;
	rank: number;
};
export type RestaurantLeaderboardEntry = {
	restaurantId: bigint;
	restaurantName: string;
	imageUrl: string;
	punchCardCount: number;
	rank: number;
};
````

## File: src/app/admin/restaurants/actions.ts
````typescript
"use server";
import { db } from "@/db/db";
import { restaurants } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createRestaurantSchema } from "@/types/schemas";
import { z } from "zod";
import { createRestaurant } from "@/db/models/restaurants";
import { revalidatePath } from "next/cache";
export async function saveQRCodeUrl(
	restaurantId: string,
	qrCodeUrl: string,
) {
	try {
		const updatedRestaurant = await db
			.update(restaurants)
			.set({ qrCodeUrl })
			.where(eq(restaurants.id, BigInt(restaurantId)))
			.returning();
		if (!updatedRestaurant || updatedRestaurant.length === 0) {
			return {
				success: false,
				error: "No restaurant was updated"
			};
		}
		return {
			success: true,
			restaurant: updatedRestaurant[0]
		};
	} catch (error) {
		console.error("Error saving QR code URL:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to save QR code"
		};
	}
}
export async function saveBulkQRCodeUrls(
	restaurantQRCodes: { restaurantId: string; qrCodeUrl: string }[],
): Promise<{
	success: boolean;
	results: { restaurantId: string; success: boolean }[];
}> {
	const results: { restaurantId: string; success: boolean }[] = [];
	try {
		for (const { restaurantId, qrCodeUrl } of restaurantQRCodes) {
			try {
				await db
					.update(restaurants)
					.set({ qrCodeUrl })
					.where(eq(restaurants.id, BigInt(restaurantId)));
				results.push({ restaurantId, success: true });
			} catch (error) {
				console.error(
					`Error saving QR code URL for restaurant ${restaurantId}:`,
					error,
				);
				results.push({ restaurantId, success: false });
			}
		}
		revalidatePath("/admin/restaurants");
		return {
			success: results.some((result) => result.success),
			results,
		};
	} catch (error) {
		console.error("Error in bulk QR code generation:", error);
		return { success: false, results };
	}
}
export async function createRestaurantAction(
	formData: z.infer<typeof createRestaurantSchema>,
): Promise<{ success: boolean; error?: string }> {
	try {
		const validatedData = createRestaurantSchema.parse(formData);
		const result = await createRestaurant(validatedData);
		revalidatePath("/admin/restaurants");
		return { success: true };
	} catch (error) {
		console.error("Error creating restaurant:", error);
		let errorMessage = "An unexpected error occurred";
		if (error instanceof z.ZodError) {
			errorMessage = error.errors.map((e) => e.message).join(", ");
		} else if (error instanceof Error) {
			errorMessage = error.message;
		}
		return { success: false, error: errorMessage };
	}
}
````

## File: src/app/admin/users/page.tsx
````typescript
import { getUsers } from "@/db/models/users/users";
import Link from "next/link";
export default async function AdminUsersPage() {
	const users = await getUsers();
	console.log("🚀 ~ AdminUsersPage ~ users:", users);
	return (
		<div>
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">User Management</h1>
				<Link
					href="/admin"
					className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
				>
					Back to Dashboard
				</Link>
			</div>
			<div className="bg-white rounded-lg shadow-sm overflow-hidden">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Name
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Email
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Role
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{users.map((user) => (
							<tr key={user.id}>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm font-medium text-gray-900">
										{user.name}
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-gray-500">{user.email}</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											user.role === "admin"
												? "bg-purple-100 text-purple-800"
												: "bg-green-100 text-green-800"
										}`}
									>
										{}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									<button className="text-indigo-600 hover:text-indigo-900 mr-4">
										Edit
									</button>
									<button className="text-red-600 hover:text-red-900">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
````

## File: src/app/admin/page.tsx
````typescript
import { auth } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/db";
import { AdminDashboardContent } from "@/components/admin/admin-dashboard-content";
export default async function AdminDashboardPage() {
	const session = await auth();
	const user = session?.userId ? await getUserByClerkId(session?.userId) : null;
	return <AdminDashboardContent user={user} />;
}
````

## File: src/components/admin/deals/deals-table.tsx
````typescript
'use client'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Edit,
  Trash2,
  Eye,
  MoreVertical,
  Download,
  FileSpreadsheet,
  Upload,
} from 'lucide-react'
import type {Deal} from '@/types/db'
import {deleteRestaurantDeal} from '@/db/models/restaurants/restaurants'
import {useRouter} from 'next/navigation'
import {exportToCSV} from '@/lib/csv'
import {CSVUpload} from '@/components/admin/csv-upload'
import {importDealsFromCSV} from '@/actions/deals'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import {toast} from 'sonner'
type DealWithRestaurant = Deal & {
  restaurant?: {
    name: string
    id?: bigint
  }
}
export function DealsTable({deals}: {deals: DealWithRestaurant[]}) {
  const [isDeleting, setIsDeleting] = useState<bigint | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [dealToDelete, setDealToDelete] = useState<bigint | null>(null)
  const [isMobileView, setIsMobileView] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const [isImporting, setIsImporting] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 768)
    }
    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])
  const handleDelete = async (id: bigint) => {
    setDealToDelete(id)
    setShowDeleteConfirm(true)
  }
  const confirmDelete = async () => {
    if (!dealToDelete) return
    try {
      setIsDeleting(dealToDelete)
      await deleteRestaurantDeal(dealToDelete)
      toast.success('Deal deleted', {
        description: 'The deal has been successfully deleted.',
      })
      router.refresh()
    } catch (error) {
      console.error('Error deleting deal:', error)
      toast.error('Error', {
        description: 'Failed to delete the deal. Please try again.',
      })
    } finally {
      setIsDeleting(null)
      setShowDeleteConfirm(false)
      setDealToDelete(null)
    }
  }
  const cancelDelete = () => {
    setShowDeleteConfirm(false)
    setDealToDelete(null)
  }
  const handleExportCSV = async () => {
    try {
      setIsExporting(true)
      const exportData = deals.map((deal) => ({
        id: deal.id.toString(),
        title: deal.title,
        content: deal.content,
        restaurant: deal.restaurant?.name || 'Unknown',
        status: deal.active ? 'Active' : 'Inactive',
        createdAt: new Date(deal.createdAt).toLocaleDateString(),
        updatedAt: new Date(deal.updatedAt).toLocaleDateString(),
      }))
      exportToCSV(exportData, 'deals-export')
      toast.success(`Successfully exported ${deals.length} deals to CSV`)
    } catch (error) {
      console.error('Error exporting CSV:', error)
      toast.error('Failed to export CSV. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }
  const handleImportCSV = async (data: Record<string, unknown>[]) => {
    try {
      setIsImporting(true)
      const result = await importDealsFromCSV(data)
      if (result.success) {
        router.refresh()
      } else {
        toast.error(result.message)
        if (result.error?._form) {
          throw new Error(result.error._form[0])
        }
      }
    } catch (error) {
      console.error('CSV import error:', error)
      throw error
    } finally {
      setIsImporting(false)
    }
  }
  const renderMobileCards = () => {
    return deals.length > 0 ? (
      <div className='space-y-4'>
        {deals.map((deal) => (
          <div
            key={String(deal.id)}
            className='bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden'
          >
            <div className='relative h-32 w-full bg-gray-100'>
              {deal.imageUrl ? (
                <Image
                  src={deal.imageUrl}
                  alt={deal.title}
                  fill
                  className='object-cover'
                />
              ) : (
                <div className='h-full w-full bg-gray-200 flex items-center justify-center'>
                  <span className='text-gray-500 text-sm'>No image</span>
                </div>
              )}
            </div>
            <div className='p-4'>
              <div className='flex justify-between items-start'>
                <h3 className='font-medium text-gray-900'>{deal.title}</h3>
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    deal.active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {deal.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              {deal.restaurant?.name && (
                <p className='text-sm text-gray-600 mt-1'>
                  {deal.restaurant.name}
                </p>
              )}
              <p className='text-sm text-gray-500 mt-2 line-clamp-2'>
                {deal.content}
              </p>
              <div className='flex justify-between items-center mt-4 pt-3 border-t border-gray-100'>
                <div className='text-xs text-gray-500'>
                  Created: {new Date(deal.createdAt).toLocaleDateString()}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='sm' className='h-8 w-8 p-0'>
                      <MoreVertical className='h-4 w-4' />
                      <span className='sr-only'>Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/deals/${deal.id}`}>
                        <Eye className='mr-2 h-4 w-4' />
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/deals/${deal.id}/edit`}>
                        <Edit className='mr-2 h-4 w-4' />
                        Edit Deal
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(deal.id)}
                      className='text-red-600'
                    >
                      <Trash2 className='mr-2 h-4 w-4' />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className='bg-white rounded-lg border border-gray-200 p-8 text-center'>
        <p className='text-gray-500'>
          No deals found.{' '}
          <Link
            href='/admin/deals/new'
            className='text-blue-500 hover:underline'
          >
            Create one
          </Link>
        </p>
      </div>
    )
  }
  return (
    <>
      {}
      <div className='mb-4 flex justify-end gap-2'>
        <CSVUpload
          onUpload={handleImportCSV}
          requiredColumns={['title', 'content', 'restaurantId', 'active']}
          entityName='Deals'
          buttonText='Import Deals'
          icon={<Upload className='h-3.5 w-3.5 mr-1.5' />}
        />
        <Button
          size='sm'
          variant='outline'
          onClick={handleExportCSV}
          disabled={isExporting || deals.length === 0}
          className='h-8 rounded-lg bg-background hover:bg-gray-100'
        >
          <FileSpreadsheet className='h-3.5 w-3.5 mr-1.5' />
          {isExporting ? 'Exporting...' : 'Export to CSV'}
        </Button>
      </div>
      {}
      <div className={cn(isMobileView ? 'block' : 'hidden')}>
        {renderMobileCards()}
      </div>
      {}
      <div className={cn(isMobileView ? 'hidden' : 'block')}>
        <div className='w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm'>
          <div className='overflow-x-auto'>
            <table className='w-full min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50 text-xs font-medium uppercase text-gray-500'>
                <tr>
                  <th scope='col' className='px-6 py-3 text-left'>
                    Deal
                  </th>
                  <th scope='col' className='px-6 py-3 text-left'>
                    Restaurant
                  </th>
                  <th scope='col' className='px-6 py-3 text-left'>
                    Status
                  </th>
                  <th scope='col' className='px-6 py-3 text-left'>
                    Created
                  </th>
                  <th scope='col' className='px-6 py-3 text-left'>
                    Last Updated
                  </th>
                  <th scope='col' className='px-6 py-3 text-right'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {deals.length > 0 ? (
                  deals.map((deal) => (
                    <tr key={String(deal.id)} className='hover:bg-gray-50'>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='flex items-center space-x-3'>
                          <div className='h-10 w-10 flex-shrink-0 relative overflow-hidden rounded-md'>
                            {deal.imageUrl ? (
                              <Image
                                src={deal.imageUrl}
                                alt={deal.title}
                                fill
                                className='object-cover'
                              />
                            ) : (
                              <div className='h-full w-full bg-gray-200 flex items-center justify-center'>
                                <span className='text-gray-500 text-xs'>
                                  No image
                                </span>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className='font-medium text-gray-900'>
                              {deal.title}
                            </p>
                            <p className='text-sm text-gray-500 truncate max-w-[200px]'>
                              {deal.content}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <span className='font-medium'>
                          {deal.restaurant?.name}
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            deal.active
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {deal.active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                        {new Date(deal.createdAt).toLocaleDateString()}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                        {new Date(deal.updatedAt).toLocaleDateString()}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
                        <div className='flex justify-end space-x-2'>
                          <Link
                            href={`/admin/deals/${deal.id}`}
                            className='rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                            title='View'
                          >
                            <Eye size={18} />
                          </Link>
                          <Link
                            href={`/admin/deals/${deal.id}/edit`}
                            className='rounded p-1 text-blue-500 hover:bg-blue-100 hover:text-blue-700'
                            title='Edit'
                          >
                            <Edit size={18} />
                          </Link>
                          <button
                            type='button'
                            onClick={() => handleDelete(deal.id)}
                            disabled={isDeleting === deal.id}
                            className='rounded p-1 text-red-500 hover:bg-red-100 hover:text-red-700 disabled:opacity-50'
                            title='Delete'
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className='px-6 py-4 text-center text-sm text-gray-500'
                    >
                      No deals found.{' '}
                      <Link
                        href='/admin/deals/new'
                        className='text-blue-500 hover:underline'
                      >
                        Create one
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {}
          <div className='border-t border-gray-200 px-4 py-3 sm:px-6'>
            <div className='flex flex-1 justify-between'>
              <div>
                <p className='text-sm text-gray-700'>
                  Showing <span className='font-medium'>{deals.length}</span>{' '}
                  results
                </p>
              </div>
              <div>
                <nav
                  className='isolate inline-flex -space-x-px rounded-md shadow-sm'
                  aria-label='Pagination'
                >
                  <button
                    type='button'
                    className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  >
                    <span className='sr-only'>Previous</span>
                    &laquo;
                  </button>
                  <button
                    type='button'
                    aria-current='page'
                    className='relative z-10 inline-flex items-center bg-[#818cf8] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    1
                  </button>
                  <button
                    type='button'
                    className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  >
                    <span className='sr-only'>Next</span>
                    &raquo;
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {}
      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this deal. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelDelete}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className='bg-red-600 hover:bg-red-700 focus:ring-red-600'
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
````

## File: src/components/admin/deals/new-deal-form.tsx
````typescript
'use client'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {useFormState as useServerFormState, useFormStatus} from 'react-dom'
import type {Restaurant} from '@/types/db'
import {toast} from 'sonner'
import {getRestaurants} from '@/db/models/restaurants/restaurants'
import {createDeal} from '@/components/admin/deals/actions'
type SimpleRestaurant = {
  id: bigint
  name: string
}
async function fetchRestaurants() {
  try {
    const restaurantsList = await getRestaurants()
    return restaurantsList.map((restaurant) => ({
      id: restaurant.id,
      name: restaurant.name,
    }))
  } catch (error) {
    console.error('Error fetching restaurants:', error)
    throw new Error('Failed to load restaurants')
  }
}
type FormState = {
  error: string | null
  success: boolean
}
function SubmitButton() {
  const {pending} = useFormStatus()
  return (
    <button
      type='submit'
      disabled={pending}
      className='inline-flex justify-center rounded-md border border-transparent bg-[#818cf8] px-4 py-2 text-sm font-medium text-white hover:bg-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#818cf8] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    >
      {pending ? 'Creating...' : 'Create Deal'}
    </button>
  )
}
export function NewDealForm() {
  const router = useRouter()
  const [restaurants, setRestaurants] = useState<SimpleRestaurant[]>([])
  const [isLoadingRestaurants, setIsLoadingRestaurants] = useState(true)
  const [formState, formAction] = useServerFormState(createDeal, {
    error: null,
    success: false,
  })
  useEffect(() => {
    fetchRestaurants()
      .then((data) => {
        setRestaurants(data)
        setIsLoadingRestaurants(false)
      })
      .catch(() => {
        setIsLoadingRestaurants(false)
      })
  }, [])
  useEffect(() => {
    if (formState.success) {
      toast.success('Deal created', {
        description: 'The deal has been successfully created.',
      })
      router.push('/admin/deals')
    } else if (formState.error) {
      toast.error('Error', {
        description:
          formState.error || 'Failed to create the deal. Please try again.',
      })
    }
  }, [formState, router])
  return (
    <form action={formAction} className='space-y-6'>
      {formState.error && (
        <div className='bg-red-50 border-l-4 border-red-500 p-4 mb-6'>
          <div className='flex'>
            <div>
              <p className='text-sm text-red-700'>{formState.error}</p>
            </div>
          </div>
        </div>
      )}
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        {}
        <div className='col-span-2'>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-700'
          >
            Deal Title <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='title'
            name='title'
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#818cf8] focus:outline-none focus:ring-1 focus:ring-[#818cf8] sm:text-sm'
            placeholder="e.g., 'Happy Hour Special' or 'Weekend Brunch Offer'"
            required
          />
        </div>
        {}
        <div className='col-span-2'>
          <label
            htmlFor='content'
            className='block text-sm font-medium text-gray-700'
          >
            Deal Description <span className='text-red-500'>*</span>
          </label>
          <textarea
            id='content'
            name='content'
            rows={4}
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#818cf8] focus:outline-none focus:ring-1 focus:ring-[#818cf8] sm:text-sm'
            placeholder='Describe the deal in detail, including terms and conditions'
            required
          />
        </div>
        {}
        <div>
          <label
            htmlFor='restaurantId'
            className='block text-sm font-medium text-gray-700'
          >
            Restaurant <span className='text-red-500'>*</span>
          </label>
          <select
            id='restaurantId'
            name='restaurantId'
            className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#818cf8] focus:outline-none focus:ring-1 focus:ring-[#818cf8] sm:text-sm'
            required
            disabled={isLoadingRestaurants}
          >
            <option value=''>Select Restaurant</option>
            {restaurants.map((restaurant) => (
              <option key={String(restaurant.id)} value={String(restaurant.id)}>
                {restaurant.name}
              </option>
            ))}
          </select>
          {isLoadingRestaurants && (
            <p className='mt-1 text-xs text-gray-500'>Loading restaurants...</p>
          )}
        </div>
        {}
        <div className='col-span-2'>
          <div className='flex items-center'>
            <input
              type='checkbox'
              id='active'
              name='active'
              defaultChecked={true}
              className='h-4 w-4 rounded border-gray-300 text-[#818cf8] focus:ring-[#818cf8]'
            />
            <label
              htmlFor='active'
              className='ml-2 block text-sm text-gray-700'
            >
              Active (immediately visible to users)
            </label>
          </div>
          <p className='mt-1 text-xs text-gray-500'>
            If unchecked, the deal will be saved but not visible to users
          </p>
        </div>
      </div>
      {}
      <div className='flex justify-end space-x-3 pt-5'>
        <button
          type='button'
          onClick={() => router.back()}
          className='rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#818cf8] focus:ring-offset-2'
        >
          Cancel
        </button>
        <SubmitButton />
      </div>
    </form>
  )
}
````

## File: src/components/kokonutui/bento-grid.tsx
````typescript
"use client";
import { cn } from "@/lib/utils";
import {
	CheckCircle,
	Clock,
	Star,
	TrendingUp,
	Video,
	Globe,
} from "lucide-react";
import type { ReactNode } from "react";
interface BentoItem {
	title: string;
	description: string | ReactNode;
	icon: ReactNode;
	status?: string;
	tags?: string[];
	meta?: string;
	cta?: string;
	colSpan?: number;
	hasPersistentHover?: boolean;
	id?: string;
	renderCustomContent?: boolean;
}
interface BentoGridProps {
	items: BentoItem[];
}
const itemsSample: BentoItem[] = [
	{
		title: "Analytics Dashboard",
		meta: "v2.4.1",
		description:
			"Real-time metrics with AI-powered insights and predictive analytics",
		icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
		status: "Live",
		tags: ["Statistics", "Reports", "AI"],
		hasPersistentHover: true,
	},
	{
		title: "Task Manager",
		meta: "84 completed",
		description: "Automated workflow management with priority scheduling",
		icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
		status: "Updated",
		tags: ["Productivity", "Automation"],
	},
	{
		title: "Media Library",
		meta: "12GB used",
		description: "Cloud storage with intelligent content processing",
		icon: <Video className="w-4 h-4 text-purple-500" />,
		tags: ["Storage", "CDN"],
	},
	{
		title: "Global Network",
		meta: "6 regions",
		description: "Multi-region deployment with edge computing",
		icon: <Globe className="w-4 h-4 text-sky-500" />,
		status: "Beta",
		tags: ["Infrastructure", "Edge"],
	},
];
export function BentoGrid({ items }: BentoGridProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">
			{items.map((item, index) => (
				<div
					key={item.id || `${item.title}-${index}`}
					className={cn(
						"group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
						"border border-gray-200 dark:border-gray-800/40 bg-white dark:bg-black",
						"hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
						"hover:-translate-y-0.5 will-change-transform",
						index % 2 === 0 ? "md:col-span-2" : "col-span-1",
						{
							"shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5":
								item.hasPersistentHover,
							"dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]":
								item.hasPersistentHover,
						},
					)}
				>
					<div
						className={`absolute inset-0 ${
							item.hasPersistentHover
								? "opacity-100"
								: "opacity-0 group-hover:opacity-100"
						} transition-opacity duration-300`}
					>
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
					</div>
					<div className="relative flex flex-col space-y-3">
						<div className="flex items-center justify-between">
							<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-linear-to-br transition-all duration-300">
								{item.icon}
							</div>
							<span
								className={cn(
									"text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-xs",
									"bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300",
									"transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20",
								)}
							>
								{item.status || "Active"}
							</span>
						</div>
						<div className="space-y-2">
							<h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px]">
								{item.title}
								<span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">
									{item.meta}
								</span>
							</h3>
							{typeof item.description === "string" ? (
								<p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">
									{item.description}
								</p>
							) : (
								<div className="text-sm text-gray-600 dark:text-gray-300">
									{item.description}
								</div>
							)}
						</div>
						<div className="flex items-center justify-between mt-2">
							<div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
								{item.tags?.map((tag) => (
									<span
										key={tag}
										className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-xs transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20"
									>
										#{tag}
									</span>
								))}
							</div>
							<span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
								{item.cta || "Explore →"}
							</span>
						</div>
					</div>
					<div
						className={`absolute inset-0 -z-10 rounded-xl p-px bg-linear-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 ${
							item.hasPersistentHover
								? "opacity-100"
								: "opacity-0 group-hover:opacity-100"
						} transition-opacity duration-300`}
					/>
				</div>
			))}
		</div>
	);
}
````

## File: src/components/kokonutui/card-10.tsx
````typescript
import { Clock, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
export default function Card_10() {
	return (
		<div className="w-full max-w-sm mx-auto">
			<div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-2xs border border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden">
				<div className="p-5 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xs">
					<div className="flex items-start justify-between mb-2">
						<h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
							Dental Consultation
						</h2>
						<div className="px-2.5 py-0.5 rounded-full text-xs font-medium border bg-orange-100 text-orange-700 border-orange-200">
							WAITING
						</div>
					</div>
					<p className="text-xs text-zinc-500 dark:text-zinc-400">
						123 Healthcare Ave, Medical Center
					</p>
				</div>
				<div className="p-5 space-y-5">
					<div className="flex items-center gap-3 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
						<Image
							src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
							width={40}
							height={40}
							alt="Avatar"
						/>
						<div>
							<div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
								Sarah Johnson
							</div>
							<div className="text-xs text-zinc-500 dark:text-zinc-400">
								sarah.j@example.com
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-3">
						{["position", "wait"].map((type) => (
							<div
								key={type}
								className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-3"
							>
								{type === "position" ? (
									<>
										<span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
											Position
										</span>
										<div className="flex items-baseline mt-1">
											<span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
												#3
											</span>
											<span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">
												in queue
											</span>
										</div>
									</>
								) : (
									<>
										<span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
											Estimated Wait
										</span>
										<div className="flex items-baseline mt-1">
											<span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
												25
											</span>
											<span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">
												min
											</span>
										</div>
									</>
								)}
							</div>
						))}
					</div>
					<div className="space-y-2">
						<div className="flex items-center justify-between text-xs px-1">
							<div className="flex items-center gap-1.5">
								<Clock className="w-3.5 h-3.5 text-zinc-400" />
								<span className="text-zinc-500 font-medium">09:30</span>
							</div>
							<div className="flex items-center gap-1.5">
								<span className="text-zinc-500 font-medium">{new Date()}</span>
								<Calendar className="w-3.5 h-3.5 text-zinc-400" />
							</div>
						</div>
						<div>
							<Progress
								value={45}
								className="h-1 bg-zinc-200 dark:bg-zinc-700"
							/>
						</div>
					</div>
					<Button
						variant="ghost"
						className="w-full text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 h-9 text-sm"
					>
						<X className="w-4 h-4 mr-2" />
						Cancel Reservation
					</Button>
				</div>
			</div>
		</div>
	);
}
````

## File: src/components/magicui/dot-pattern.tsx
````typescript
'use client'
import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import type React from 'react'
import {useEffect, useId, useRef, useState} from 'react'
interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
  glow?: boolean
  [key: string]: unknown
}
export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: DotPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({width: 0, height: 0})
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const {width, height} = containerRef.current.getBoundingClientRect()
        setDimensions({width, height})
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])
  const dots = Array.from(
    {
      length:
        Math.ceil(dimensions.width / width) *
        Math.ceil(dimensions.height / height),
    },
    (_, i) => {
      const col = i % Math.ceil(dimensions.width / width)
      const row = Math.floor(i / Math.ceil(dimensions.width / width))
      return {
        x: col * width + cx,
        y: row * height + cy,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      }
    }
  )
  return (
    <svg
      ref={containerRef}
      aria-hidden='true'
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full',
        className
      )}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset='0%' stopColor='currentColor' stopOpacity='1' />
          <stop offset='100%' stopColor='currentColor' stopOpacity='0' />
        </radialGradient>
      </defs>
      {dots.map((dot, index) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={glow ? `url(#${id}-gradient)` : 'currentColor'}
          className='text-neutral-400/80'
          initial={glow ? {opacity: 0.4, scale: 1} : {}}
          animate={
            glow
              ? {
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.5, 1],
                }
              : {}
          }
          transition={
            glow
              ? {
                  duration: dot.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'reverse',
                  delay: dot.delay,
                  ease: 'easeInOut',
                }
              : {}
          }
        />
      ))}
    </svg>
  )
}
````

## File: src/components/ui/input.tsx
````typescript
import * as React from "react";
import { cn } from "@/lib/utils";
export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	hasError?: boolean;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, hasError, ...props }, ref) => {
		const [isTouched, setIsTouched] = React.useState(false);
		const inputRef = React.useRef<HTMLInputElement>(null);
		const setRefs = React.useCallback(
			(element: HTMLInputElement | null) => {
				if (inputRef.current !== element) {
					inputRef.current = element;
				}
				if (typeof ref === "function") {
					ref(element);
				} else if (ref) {
					ref.current = element;
				}
			},
			[ref],
		);
		React.useEffect(() => {
			const handleTouchStart = (e: TouchEvent) => {
				if (e.target === inputRef.current) {
					setIsTouched(true);
				}
			};
			document.addEventListener("touchstart", handleTouchStart, {
				passive: true,
			});
			return () => {
				document.removeEventListener("touchstart", handleTouchStart);
			};
		}, []);
		return (
			<input
				type={type}
				className={cn(
					"flex h-14 w-full rounded-md border border-input bg-background px-4 py-4 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 touch-manipulation",
					hasError &&
						"border-red-500 focus-visible:ring-red-500 placeholder:text-red-500",
					className,
				)}
				ref={setRefs}
				onTouchStart={(e) => {
					e.stopPropagation();
					props.onTouchStart?.(e);
				}}
				onTouchEnd={(e) => {
					if (isTouched && inputRef.current) {
						inputRef.current.focus();
					}
					props.onTouchEnd?.(e);
				}}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";
export { Input };
````

## File: src/components/ui/punchcard.tsx
````typescript
'use client'
import * as React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {cn} from '@/lib/utils'
import {Award, Coffee, Stamp, Utensils} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {Badge} from '@/components/ui/badge'
import {ProgressIndicator} from '@/components/progress-indicator/progress-indicator'
export const PUNCH_THRESHOLD = 10
export interface RestaurantPunch {
  restaurantId: string | number | bigint
  restaurantName: string
  restaurantImage?: string
  currentPunches: number
  MAX_PUNCH_THRESHOLD?: number
  completed?: boolean
  lastUpdated?: Date | string
}
interface PunchCardProps
  extends Omit<React.ComponentProps<typeof motion.div>, 'ref'> {
  restaurants: RestaurantPunch[]
}
export const PunchCard = React.forwardRef<HTMLDivElement, PunchCardProps>(
  ({className, restaurants, ...props}, ref) => {
    console.log('🚀 ~ restaurants:', restaurants)
    const currentPunches = restaurants.length
    const MAX_PUNCH_THRESHOLD = 10
    return (
      <motion.div
        ref={ref}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className={cn(
          'relative overflow-hidden rounded-xl bg-card shadow-lg',
          'w-full flex flex-col',
          className
        )}
        style={{perspective: 1000}}
        {...props}
      >
        {}
        <div className='relative h-36 sm:h-48 w-full bg-gradient-to-r from-primary/80 to-primary'>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
          <div className='absolute bottom-0 w-full p-4'>
            <h3 className='text-lg sm:text-xl font-bold text-white'>
              Your Punch Card
            </h3>
            <p className='text-xs text-white/70'>
              Collect punches from your favorite restaurants
            </p>
          </div>
        </div>
        {}
        <div className='flex flex-col p-4 sm:p-6'>
          <h4 className='text-base font-medium mb-4'>Your Restaurants</h4>
          {restaurants.length === 0 ? (
            <div className='py-8 text-center text-muted-foreground'>
              You haven't earned any punches yet. Visit a restaurant to get
              started!
            </div>
          ) : (
            <div className='space-y-4'>
              <div
                className={cn(
                  'grid gap-2 mb-5',
                  MAX_PUNCH_THRESHOLD <= 5
                    ? 'grid-cols-5'
                    : MAX_PUNCH_THRESHOLD <= 8
                    ? 'grid-cols-4'
                    : 'grid-cols-5'
                )}
              >
                {restaurants.map((restaurant, index) => (
                  <motion.div
                    key={`punch-${restaurant.restaurantId}`}
                    style={{backgroundColor: '#ddd'}}
                    className={cn(
                      'bg-gray aspect-square rounded-lg border-2 flex items-center justify-center relative ',
                      index < currentPunches
                        ? 'border-primary'
                        : ' border-muted'
                    )}
                    initial={false}
                    animate={
                      index === currentPunches - 1
                        ? {scale: [1, 1.2, 1], rotate: [0, 15, 0]}
                        : {}
                    }
                    transition={{duration: 0.5}}
                  >
                    {index < currentPunches && (
                      <motion.div
                        initial={{scale: 0, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          delay: index === currentPunches - 1 ? 0.2 : 0,
                        }}
                      >
                        <Stamp className='h-5 w-5 stroke-black text-black' />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className='flex items-center justify-start'>
          <ProgressIndicator punches={restaurants} />
        </div>
      </motion.div>
    )
  }
)
PunchCard.displayName = 'PunchCard'
interface RestaurantPunchItemProps {
  restaurant: RestaurantPunch
  onAddPunch?: (restaurantId: string | number | bigint) => void
}
````

## File: src/components/ui/sidebar.tsx
````typescript
"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
type SidebarContext = {
	state: "expanded" | "collapsed";
	open: boolean;
	setOpen: (open: boolean) => void;
	openMobile: boolean;
	setOpenMobile: (open: boolean) => void;
	isMobile: boolean;
	toggleSidebar: () => void;
};
const SidebarContext = React.createContext<SidebarContext | null>(null);
function useSidebar() {
	const context = React.useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider.");
	}
	return context;
}
const SidebarProvider = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div"> & {
		defaultOpen?: boolean;
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
	}
>(
	(
		{
			defaultOpen = true,
			open: openProp,
			onOpenChange: setOpenProp,
			className,
			style,
			children,
			...props
		},
		ref,
	) => {
		const isMobile = useIsMobile();
		const [openMobile, setOpenMobile] = React.useState(false);
		const [_open, _setOpen] = React.useState(defaultOpen);
		const open = openProp ?? _open;
		const setOpen = React.useCallback(
			(value: boolean | ((value: boolean) => boolean)) => {
				const openState = typeof value === "function" ? value(open) : value;
				if (setOpenProp) {
					setOpenProp(openState);
				} else {
					_setOpen(openState);
				}
				document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
			},
			[setOpenProp, open],
		);
		const toggleSidebar = React.useCallback(() => {
			return isMobile
				? setOpenMobile((open) => !open)
				: setOpen((open) => !open);
		}, [isMobile, setOpen, setOpenMobile]);
		React.useEffect(() => {
			const handleKeyDown = (event: KeyboardEvent) => {
				if (
					event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
					(event.metaKey || event.ctrlKey)
				) {
					event.preventDefault();
					toggleSidebar();
				}
			};
			window.addEventListener("keydown", handleKeyDown);
			return () => window.removeEventListener("keydown", handleKeyDown);
		}, [toggleSidebar]);
		const state = open ? "expanded" : "collapsed";
		const contextValue = React.useMemo<SidebarContext>(
			() => ({
				state,
				open,
				setOpen,
				isMobile,
				openMobile,
				setOpenMobile,
				toggleSidebar,
			}),
			[
				state,
				open,
				setOpen,
				isMobile,
				openMobile,
				setOpenMobile,
				toggleSidebar,
			],
		);
		return (
			<SidebarContext.Provider value={contextValue}>
				<TooltipProvider delayDuration={0}>
					<div
						style={
							{
								"--sidebar-width": SIDEBAR_WIDTH,
								"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
								...style,
							} as React.CSSProperties
						}
						className={cn(
							"group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
							className,
						)}
						ref={ref}
						{...props}
					>
						{children}
					</div>
				</TooltipProvider>
			</SidebarContext.Provider>
		);
	},
);
SidebarProvider.displayName = "SidebarProvider";
const Sidebar = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div"> & {
		side?: "left" | "right";
		variant?: "sidebar" | "floating" | "inset";
		collapsible?: "offcanvas" | "icon" | "none";
	}
>(
	(
		{
			side = "left",
			variant = "sidebar",
			collapsible = "offcanvas",
			className,
			children,
			...props
		},
		ref,
	) => {
		const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
		if (collapsible === "none") {
			return (
				<div
					className={cn(
						"flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
						className,
					)}
					ref={ref}
					{...props}
				>
					{children}
				</div>
			);
		}
		if (isMobile) {
			return (
				<Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
					<SheetContent
						data-sidebar="sidebar"
						data-mobile="true"
						className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
						style={
							{
								"--sidebar-width": SIDEBAR_WIDTH_MOBILE,
							} as React.CSSProperties
						}
						side={side}
					>
						<div className="flex h-full w-full flex-col">{children}</div>
					</SheetContent>
				</Sheet>
			);
		}
		return (
			<div
				ref={ref}
				className="group peer hidden text-sidebar-foreground md:block"
				data-state={state}
				data-collapsible={state === "collapsed" ? collapsible : ""}
				data-variant={variant}
				data-side={side}
			>
				{/* This is what handles the sidebar gap on desktop */}
				<div
					className={cn(
						"relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
						"group-data-[collapsible=offcanvas]:w-0",
						"group-data-[side=right]:rotate-180",
						variant === "floating" || variant === "inset"
							? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
							: "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
					)}
				/>
				<div
					className={cn(
						"fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
						side === "left"
							? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
							: "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
						variant === "floating" || variant === "inset"
							? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
							: "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
						className,
					)}
					{...props}
				>
					<div
						data-sidebar="sidebar"
						className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm"
					>
						{children}
					</div>
				</div>
			</div>
		);
	},
);
Sidebar.displayName = "Sidebar";
const SidebarTrigger = React.forwardRef<
	React.ElementRef<typeof Button>,
	React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
	const { toggleSidebar } = useSidebar();
	return (
		<Button
			ref={ref}
			data-sidebar="trigger"
			variant="ghost"
			size="icon"
			className={cn("h-7 w-7", className)}
			onClick={(event) => {
				onClick?.(event);
				toggleSidebar();
			}}
			{...props}
		>
			<PanelLeft />
			<span className="sr-only">Toggle Sidebar</span>
		</Button>
	);
});
SidebarTrigger.displayName = "SidebarTrigger";
const SidebarRail = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
	const { toggleSidebar } = useSidebar();
	return (
		<button
			ref={ref}
			data-sidebar="rail"
			aria-label="Toggle Sidebar"
			tabIndex={-1}
			onClick={toggleSidebar}
			title="Toggle Sidebar"
			className={cn(
				"absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
				"in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
				"[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
				"group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar",
				"[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
				"[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
				className,
			)}
			{...props}
		/>
	);
});
SidebarRail.displayName = "SidebarRail";
const SidebarInset = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
	return (
		<main
			ref={ref}
			className={cn(
				"relative flex min-h-svh flex-1 flex-col bg-background",
				"peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
				className,
			)}
			{...props}
		/>
	);
});
SidebarInset.displayName = "SidebarInset";
const SidebarInput = React.forwardRef<
	React.ElementRef<typeof Input>,
	React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
	return (
		<Input
			ref={ref}
			data-sidebar="input"
			className={cn(
				"h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
				className,
			)}
			{...props}
		/>
	);
});
SidebarInput.displayName = "SidebarInput";
const SidebarHeader = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			data-sidebar="header"
			className={cn("flex flex-col gap-2 p-2", className)}
			{...props}
		/>
	);
});
SidebarHeader.displayName = "SidebarHeader";
const SidebarFooter = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			data-sidebar="footer"
			className={cn("flex flex-col gap-2 p-2", className)}
			{...props}
		/>
	);
});
SidebarFooter.displayName = "SidebarFooter";
const SidebarSeparator = React.forwardRef<
	React.ElementRef<typeof Separator>,
	React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
	return (
		<Separator
			ref={ref}
			data-sidebar="separator"
			className={cn("mx-2 w-auto bg-sidebar-border", className)}
			{...props}
		/>
	);
});
SidebarSeparator.displayName = "SidebarSeparator";
const SidebarContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			data-sidebar="content"
			className={cn(
				"flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
				className,
			)}
			{...props}
		/>
	);
});
SidebarContent.displayName = "SidebarContent";
const SidebarGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			data-sidebar="group"
			className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
			{...props}
		/>
	);
});
SidebarGroup.displayName = "SidebarGroup";
const SidebarGroupLabel = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "div";
	return (
		<Comp
			ref={ref}
			data-sidebar="group-label"
			className={cn(
				"flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-hidden ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
				"group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
				className,
			)}
			{...props}
		/>
	);
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
const SidebarGroupAction = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			ref={ref}
			data-sidebar="group-action"
			className={cn(
				"absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
				"after:absolute after:-inset-2 md:after:hidden",
				"group-data-[collapsible=icon]:hidden",
				className,
			)}
			{...props}
		/>
	);
});
SidebarGroupAction.displayName = "SidebarGroupAction";
const SidebarGroupContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		data-sidebar="group-content"
		className={cn("w-full text-sm", className)}
		{...props}
	/>
));
SidebarGroupContent.displayName = "SidebarGroupContent";
const SidebarMenu = React.forwardRef<
	HTMLUListElement,
	React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
	<ul
		ref={ref}
		data-sidebar="menu"
		className={cn("flex w-full min-w-0 flex-col gap-1", className)}
		{...props}
	/>
));
SidebarMenu.displayName = "SidebarMenu";
const SidebarMenuItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		data-sidebar="menu-item"
		className={cn("group/menu-item relative", className)}
		{...props}
	/>
));
SidebarMenuItem.displayName = "SidebarMenuItem";
const sidebarMenuButtonVariants = cva(
	"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
				outline:
					"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
			},
			size: {
				default: "h-8 text-sm",
				sm: "h-7 text-xs",
				lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);
const SidebarMenuButton = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<"button"> & {
		asChild?: boolean;
		isActive?: boolean;
		tooltip?: string | React.ComponentProps<typeof TooltipContent>;
	} & VariantProps<typeof sidebarMenuButtonVariants>
>(
	(
		{
			asChild = false,
			isActive = false,
			variant = "default",
			size = "default",
			tooltip,
			className,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "button";
		const { isMobile, state } = useSidebar();
		const button = (
			<Comp
				ref={ref}
				data-sidebar="menu-button"
				data-size={size}
				data-active={isActive}
				className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
				{...props}
			/>
		);
		if (!tooltip) {
			return button;
		}
		if (typeof tooltip === "string") {
			tooltip = {
				children: tooltip,
			};
		}
		return (
			<Tooltip>
				<TooltipTrigger asChild>{button}</TooltipTrigger>
				<TooltipContent
					side="right"
					align="center"
					hidden={state !== "collapsed" || isMobile}
					{...tooltip}
				/>
			</Tooltip>
		);
	},
);
SidebarMenuButton.displayName = "SidebarMenuButton";
const SidebarMenuAction = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<"button"> & {
		asChild?: boolean;
		showOnHover?: boolean;
	}
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			ref={ref}
			data-sidebar="menu-action"
			className={cn(
				"absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-hidden ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
				"after:absolute after:-inset-2 md:after:hidden",
				"peer-data-[size=sm]/menu-button:top-1",
				"peer-data-[size=default]/menu-button:top-1.5",
				"peer-data-[size=lg]/menu-button:top-2.5",
				"group-data-[collapsible=icon]:hidden",
				showOnHover &&
					"group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
				className,
			)}
			{...props}
		/>
	);
});
SidebarMenuAction.displayName = "SidebarMenuAction";
const SidebarMenuBadge = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		data-sidebar="menu-badge"
		className={cn(
			"pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
			"peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
			"peer-data-[size=sm]/menu-button:top-1",
			"peer-data-[size=default]/menu-button:top-1.5",
			"peer-data-[size=lg]/menu-button:top-2.5",
			"group-data-[collapsible=icon]:hidden",
			className,
		)}
		{...props}
	/>
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";
const SidebarMenuSkeleton = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<"div"> & {
		showIcon?: boolean;
	}
>(({ className, showIcon = false, ...props }, ref) => {
	const width = React.useMemo(() => {
		return `${Math.floor(Math.random() * 40) + 50}%`;
	}, []);
	return (
		<div
			ref={ref}
			data-sidebar="menu-skeleton"
			className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
			{...props}
		>
			{showIcon && (
				<Skeleton
					className="size-4 rounded-md"
					data-sidebar="menu-skeleton-icon"
				/>
			)}
			<Skeleton
				className="h-4 max-w-(--skeleton-width) flex-1"
				data-sidebar="menu-skeleton-text"
				style={
					{
						"--skeleton-width": width,
					} as React.CSSProperties
				}
			/>
		</div>
	);
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
const SidebarMenuSub = React.forwardRef<
	HTMLUListElement,
	React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
	<ul
		ref={ref}
		data-sidebar="menu-sub"
		className={cn(
			"mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
			"group-data-[collapsible=icon]:hidden",
			className,
		)}
		{...props}
	/>
));
SidebarMenuSub.displayName = "SidebarMenuSub";
const SidebarMenuSubItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
const SidebarMenuSubButton = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentProps<"a"> & {
		asChild?: boolean;
		size?: "sm" | "md";
		isActive?: boolean;
	}
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
	const Comp = asChild ? Slot : "a";
	return (
		<Comp
			ref={ref}
			data-sidebar="menu-sub-button"
			data-size={size}
			data-active={isActive}
			className={cn(
				"flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-hidden ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
				"data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
				size === "sm" && "text-xs",
				size === "md" && "text-sm",
				"group-data-[collapsible=icon]:hidden",
				className,
			)}
			{...props}
		/>
	);
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
export {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarSeparator,
	SidebarTrigger,
	useSidebar,
};
````

## File: src/components/ui/table.tsx
````typescript
import * as React from "react";
import { cn } from "@/lib/utils";
const Table = React.forwardRef<
	HTMLTableElement,
	React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
	<div className="relative w-full overflow-auto">
		<table
			ref={ref}
			className={cn("w-full caption-bottom text-sm", className)}
			{...props}
		/>
	</div>
));
Table.displayName = "Table";
const TableHeader = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead ref={ref} className={cn(className)} {...props} />
));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody
		ref={ref}
		className={cn("[&_tr:last-child]:border-0", className)}
		{...props}
	/>
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot
		ref={ref}
		className={cn(
			"border-t border-border bg-muted/50 font-medium last:[&>tr]:border-b-0",
			className,
		)}
		{...props}
	/>
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef<
	HTMLTableRowElement,
	React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr
		ref={ref}
		className={cn(
			"border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
			className,
		)}
		{...props}
	/>
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef<
	HTMLTableCellElement,
	React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th
		ref={ref}
		className={cn(
			"h-12 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:w-px [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
			className,
		)}
		{...props}
	/>
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td
		ref={ref}
		className={cn(
			"p-3 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
			className,
		)}
		{...props}
	/>
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption
		ref={ref}
		className={cn("mt-4 text-sm text-muted-foreground", className)}
		{...props}
	/>
));
TableCaption.displayName = "TableCaption";
export {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
};
````

## File: src/db/models/punch-cards/punch-cards.ts
````typescript
"use server";
import { and, eq } from "drizzle-orm";
import { db } from "../../db";
import { punchCards, restaurants } from "../../schema";
export const getPunchCards = async () => {
	return await db.select().from(punchCards);
};
export const getPunchCardById = async (id: bigint) => {
	return await db.query.punchCards.findFirst({
		where: eq(punchCards.id, id),
		with: {
			restaurant: true,
			user: true,
		},
	});
};
export const getPunchCardsByUserId = async (userId: bigint) => {
	return await db.query.punchCards.findMany({
		where: eq(punchCards.userId, userId),
		with: {
			restaurant: true,
			user: true,
		},
	});
};
export const getUserPunchCardForRestaurant = async (
	userId: bigint,
	restaurantId: bigint,
) => {
	return await db
		.select()
		.from(punchCards)
		.where(
			and(
				eq(punchCards.userId, userId),
				eq(punchCards.restaurantId, restaurantId),
			),
		)
		.limit(1)
		.then((res) => res[0]);
};
export const getPunchCardsByRestaurantId = async (restaurantId: bigint) => {
	return await db
		.select()
		.from(punchCards)
		.where(eq(punchCards.restaurantId, restaurantId));
};
export const getUserRestaurantPunchCard = async (
	userId: bigint,
	restaurantId: bigint,
) => {
	return await db
		.select()
		.from(punchCards)
		.where(
			and(
				eq(punchCards.userId, userId),
				eq(punchCards.restaurantId, restaurantId),
			),
		)
		.limit(1)
		.then((res) => res[0]);
};
export const createPunchCard = async (data: {
	userId: bigint;
	restaurantId: bigint;
	punches?: number;
	completed?: boolean;
}) => {
	return await db.insert(punchCards).values(data).returning();
};
export const updatePunchCard = async (
	id: bigint,
	data: Partial<{
		punches: number;
		completed: boolean;
	}>,
) => {
	return await db
		.update(punchCards)
		.set(data)
		.where(eq(punchCards.id, id))
		.returning();
};
export const incrementPunchCard = async (id: bigint, increment = 1) => {
	const card = await getPunchCardById(id);
	if (!card) return null;
	const currentPunches = card.punches ?? 0;
	const newPunches = currentPunches + increment;
	return await db
		.update(punchCards)
		.set({
			punches: newPunches,
			completed: card.completed || false,
		})
		.where(eq(punchCards.id, id))
		.returning();
};
export const deletePunchCard = async (id: bigint) => {
	return await db.delete(punchCards).where(eq(punchCards.id, id)).returning();
};
````

## File: src/db/db.ts
````typescript
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import * as schemaRelations from "./relations";
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
	throw new Error("DATABASE_URL is not defined");
}
export const db = drizzle({
	connection: connectionString,
	casing: "camelCase",
	schema: {
		...schema,
		...schemaRelations,
	},
});
````

## File: src/hooks/use-punch-card-subscription.ts
````typescript
"use client";
import { useState, useEffect } from "react";
import type { PunchCard } from "@/types/db";
import { getPunchCardsByUserId } from "@/db/models/punch-cards";
import { supabase } from "@/db/supabase";
export type PunchCardWithRestaurant = {
	id: bigint;
	userId: bigint;
	restaurantId: bigint;
	punches: number;
	completed: boolean;
	updatedAt: string | null;
	restaurant: {
		id: bigint;
		name: string;
		description: string;
		imageUrl: string;
		address: string;
		qrCodeUrl: string | null;
	};
};
export function usePunchCardSubscription(userId: bigint) {
	const [punchCards, setPunchCards] = useState<PunchCardWithRestaurant[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	useEffect(() => {
		const fetchPunchCards = async () => {
			try {
				setIsLoading(true);
				const existingPunchCards: any = await getPunchCardsByUserId(userId);
				console.log("🚀 ~ fetchPunchCards ~ punchCards:", existingPunchCards);
				setPunchCards(existingPunchCards);
			} catch (err) {
				console.error("Error fetching punch cards:", err);
				setError(
					err instanceof Error ? err : new Error("Unknown error occurred"),
				);
			} finally {
				setIsLoading(false);
			}
		};
		if (userId) {
			fetchPunchCards();
		}
	}, [userId]);
	useEffect(() => {
		if (!userId) return;
		const userIdStr = userId.toString();
		const subscription = supabase
			.channel("punch-cards")
			.on(
				"postgres_changes",
				{
					event: "*",
					schema: "public",
					table: "punch_cards",
					filter: `user_id=eq.${userIdStr}`,
				},
				async (payload) => {
					console.log("Punch card change received:", payload);
					try {
						const response = await fetch(`/api/users/${userId}/punch-cards`);
						console.log("🚀 ~ response:", response);
						if (!response.ok) {
							throw new Error("Failed to fetch updated punch cards");
						}
						const data = await response.json();
						console.log("🚀 ~ data:", data);
						if (data.success && data.data) {
							setPunchCards(data.data);
						}
					} catch (err) {
						console.error("Error updating punch cards:", err);
					}
				},
			)
			.subscribe();
		console.log("🚀 ~ useEffect ~ subscription:", subscription);
		return () => {
			supabase.channel("punch-cards").unsubscribe();
		};
	}, [userId]);
	return {
		punchCards,
		isLoading,
		error,
	};
}
````

## File: src/app/admin/restaurants/qr-code-manager.tsx
````typescript
"use client";
import type React from "react";
import { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code";
import Image from "next/image";
import { useHandleQRCode } from "@/hooks/use-handle-qrCode";
import type { Restaurant } from "@/types/db";
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogTitle,
	DialogHeader,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
	QrCode,
	Download,
	Plus,
	X,
	Check,
	AlertTriangle,
	HelpCircle,
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
type QRCodeVariant = "default" | "compact" | "table";
interface QRCodeManagerProps {
	restaurant: Restaurant;
	variant?: QRCodeVariant;
}
const downloadQRCodeFromElement = (
	element: HTMLDivElement | null,
	restaurantName: string
) => {
	if (!element) return;
	try {
		const svgElement = element.querySelector("svg");
		if (!svgElement) {
			console.error("SVG element not found");
			return;
		}
		svgElement.setAttribute("style", "background-color: white");
		const svgData = new XMLSerializer().serializeToString(svgElement);
		const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
		const url = URL.createObjectURL(svgBlob);
		const image = document.createElement("img");
		image.crossOrigin = "anonymous";
		image.onload = () => {
			const canvas = document.createElement("canvas");
			const widthAttr = svgElement.getAttribute("width");
			const heightAttr = svgElement.getAttribute("height");
			const width = widthAttr ? parseInt(widthAttr) : image.width;
			const height = heightAttr ? parseInt(heightAttr) : image.height;
			canvas.width = width;
			canvas.height = height;
			const context = canvas.getContext("2d");
			if (!context) {
				console.error("Unable to get canvas context");
				return;
			}
			context.fillStyle = "#ffffff";
			context.fillRect(0, 0, width, height);
			context.drawImage(image, 0, 0, width, height);
			URL.revokeObjectURL(url);
			const pngDataUrl = canvas.toDataURL("image/png");
			const filename = `${restaurantName.replace(/\s+/g, "-").toLowerCase()}-qrcode.png`;
			const link = document.createElement("a");
			link.href = pngDataUrl;
			link.download = filename;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		};
		image.addEventListener("error", (event: Event) => {
			console.error("Error loading SVG as image", event);
		});
		image.src = url;
	} catch (err) {
		console.error("Direct PNG download failed:", err);
	}
};
export function QRCodeManager({
	restaurant,
	variant = "default",
}: QRCodeManagerProps) {
	const {
		generating,
		saving,
		success,
		error,
		qrRef,
		qrCodeValue,
		handleGenerate,
		handleCancel,
		handleSave,
		handleDownload,
	} = useHandleQRCode({ restaurant });
	const [downloadSupported, setDownloadSupported] = useState(true);
	useEffect(() => {
		const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
		const isUnsupportedSafari =
			isSafari && isIOS && /OS 11|OS 12|OS 13/.test(navigator.userAgent);
		setDownloadSupported(!isUnsupportedSafari);
	}, []);
	if (variant === "table") {
		const tableQrRef = useRef<HTMLDivElement>(null);
		const handleTableDownload = () => {
			const dialogElement = document.querySelector('[role="dialog"]');
			const qrContainer = dialogElement?.querySelector(
				'[data-qr-container="true"]',
			);
			if (qrContainer instanceof HTMLDivElement) {
				downloadQRCodeFromElement(qrContainer, restaurant.name);
			} else {
				downloadQRCodeFromElement(tableQrRef.current, restaurant.name);
			}
		};
		return (
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="flex items-center gap-1 px-2 h-8 touch-manipulation"
					>
						{restaurant.qrCodeUrl ? (
							<>
								<div
									className="relative w-8 h-8 shrink-0 bg-white p-1 rounded"
									ref={tableQrRef}
								>
									<QRCode
										value={qrCodeValue}
										size={32}
										viewBox="0 0 32 32"
										className="w-full h-full"
									/>
								</div>
								<span className="text-xs truncate">View QR</span>
							</>
						) : (
							<>
								<Plus className="h-4 w-4" />
								<span className="text-xs">Generate QR</span>
							</>
						)}
					</Button>
				</DialogTrigger>
				<DialogContent className="max-w-md p-6">
					<DialogHeader>
						<DialogTitle>QR Code Manager</DialogTitle>
					</DialogHeader>
					<div className="space-y-4">
						<FullQRManager
							restaurant={restaurant}
							generating={generating}
							saving={saving}
							success={success}
							error={error}
							qrRef={qrRef}
							qrCodeValue={qrCodeValue}
							handleGenerate={handleGenerate}
							handleCancel={handleCancel}
							handleSave={handleSave}
							handleDownload={handleDownload}
							downloadSupported={downloadSupported}
						/>
					</div>
					{restaurant.qrCodeUrl && (
						<DialogFooter className="mt-4">
							<Button onClick={handleTableDownload} size="sm" className="gap-1">
								<Download className="h-4 w-4" />
								Download This QR Code
							</Button>
						</DialogFooter>
					)}
				</DialogContent>
			</Dialog>
		);
	}
	if (variant === "compact") {
		const compactQrRef = useRef<HTMLDivElement>(null);
		const handleCompactDownload = () => {
			downloadQRCodeFromElement(compactQrRef.current, restaurant.name);
		};
		return (
			<div className="flex flex-col sm:flex-row gap-2 items-center">
				{restaurant.qrCodeUrl ? (
					<div className="flex flex-col sm:flex-row gap-3 items-center">
						<div
							className="relative w-16 h-16 shrink-0 bg-white p-2 rounded-md"
							ref={compactQrRef}
						>
							<QRCode
								size={64}
								value={qrCodeValue}
								viewBox="0 0 64 64"
								className="w-full h-full"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Button
								size="sm"
								variant="outline"
								className="text-xs h-8 min-h-[32px] touch-manipulation"
								onClick={handleGenerate}
							>
								New QR
							</Button>
							{downloadSupported && (
								<>
									<Button
										size="sm"
										variant="outline"
										className="text-xs h-8 min-h-[32px] touch-manipulation"
										onClick={handleCompactDownload}
									>
										<Download className="h-3 w-3 mr-1" />
										Download Exact
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="text-xs h-8 min-h-[32px] touch-manipulation"
										onClick={handleDownload}
									>
										<Download className="h-3 w-3 mr-1" />
										Download Original
									</Button>
								</>
							)}
						</div>
					</div>
				) : (
					<Button
						size="sm"
						onClick={handleGenerate}
						className="text-xs min-h-[32px] touch-manipulation"
					>
						<QrCode className="h-3 w-3 mr-1" />
						Generate QR
					</Button>
				)}
				{generating && (
					<div className="mt-2 flex flex-col gap-2">
						<div
							className="relative w-24 h-24 mx-auto bg-white p-2 rounded-md shadow-sm"
							ref={qrRef}
						>
							<QRCode
								size={96}
								value={qrCodeValue}
								viewBox="0 0 96 96"
								className="w-full h-full"
							/>
						</div>
						<div className="flex justify-center gap-2">
							<Button
								size="sm"
								onClick={handleSave}
								disabled={saving}
								className="text-xs h-8 min-h-[32px] touch-manipulation"
							>
								<Check className="h-3 w-3 mr-1" />
								{saving ? "Saving..." : "Save"}
							</Button>
							<Button
								size="sm"
								variant="outline"
								onClick={handleCancel}
								disabled={saving}
								className="text-xs h-8 min-h-[32px] touch-manipulation"
							>
								<X className="h-3 w-3 mr-1" />
								Cancel
							</Button>
						</div>
					</div>
				)}
				{error && (
					<div className="mt-2 p-2 bg-red-100 border border-red-200 text-red-700 rounded-md text-xs">
						{error}
					</div>
				)}
			</div>
		);
	}
	return (
		<div className="w-full max-w-md">
			<FullQRManager
				restaurant={restaurant}
				generating={generating}
				saving={saving}
				success={success}
				error={error}
				qrRef={qrRef}
				qrCodeValue={qrCodeValue}
				handleGenerate={handleGenerate}
				handleCancel={handleCancel}
				handleSave={handleSave}
				handleDownload={handleDownload}
				downloadSupported={downloadSupported}
			/>
		</div>
	);
}
interface FullQRManagerProps {
	restaurant: Restaurant;
	generating: boolean;
	saving: boolean;
	success: boolean;
	error: string | null;
	qrRef: React.RefObject<HTMLDivElement | null>;
	qrCodeValue: string;
	handleGenerate: () => void;
	handleCancel: () => void;
	handleSave: () => void;
	handleDownload: () => void;
	downloadSupported: boolean;
}
const FullQRManager = ({
	restaurant,
	generating,
	saving,
	success,
	error,
	qrRef,
	qrCodeValue,
	handleGenerate,
	handleCancel,
	handleSave,
	handleDownload,
	downloadSupported,
}: FullQRManagerProps) => {
	const currentQrRef = useRef<HTMLDivElement>(null);
	const handleDirectDownload = () => {
		downloadQRCodeFromElement(currentQrRef.current, restaurant.name);
	};
	const handleCopyQrValue = () => {
		try {
			navigator.clipboard.writeText(qrCodeValue);
			alert("QR code value copied to clipboard!");
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};
	return (
		<div className="space-y-4">
			{restaurant.qrCodeUrl ? (
				<div className="mb-4">
					<p className="text-sm text-gray-600 mb-2">Current QR code:</p>
					<div
						className="border border-gray-200 rounded-lg p-4 inline-block bg-white"
						ref={currentQrRef}
						data-qr-container="true"
					>
						<QRCode
							size={200}
							value={qrCodeValue}
							viewBox="0 0 200 200"
							className="w-36 h-36 sm:w-48 sm:h-48"
						/>
					</div>
				</div>
			) : (
				<p className="text-sm text-gray-600 mb-4">
					No QR code has been generated yet.
				</p>
			)}
			{!generating ? (
				<Button
					onClick={handleGenerate}
					className="flex items-center gap-1 touch-manipulation"
				>
					<QrCode className="h-4 w-4" />
					{restaurant.qrCodeUrl ? "Generate New QR Code" : "Generate QR Code"}
				</Button>
			) : (
				<div className="space-y-4">
					<div
						className="mb-4 p-4 bg-white border border-gray-200 rounded-lg inline-block"
						ref={qrRef}
					>
						<QRCode
							size={200}
							value={qrCodeValue}
							viewBox="0 0 200 200"
							className="w-full h-full max-w-[200px]"
						/>
					</div>
					<p className="text-sm text-gray-600 mb-4">
						This QR code links to:{" "}
						<span className="font-mono text-xs break-all">{qrCodeValue}</span>
					</p>
					<div className="flex flex-wrap gap-3">
						<Button
							onClick={handleSave}
							disabled={saving}
							className="flex items-center gap-1 touch-manipulation"
						>
							<Check className="h-4 w-4" />
							{saving ? "Saving..." : "Save QR Code"}
						</Button>
						<Button
							onClick={handleCancel}
							disabled={saving}
							variant="outline"
							className="flex items-center gap-1 touch-manipulation"
						>
							<X className="h-4 w-4" />
							Cancel
						</Button>
					</div>
				</div>
			)}
			{error && (
				<Alert variant="destructive" className="mt-4">
					<AlertTriangle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
			{success && (
				<div className="mt-4 space-y-3">
					<Alert
						variant="success"
						className="bg-green-50 border-green-200 text-green-700"
					>
						<Check className="h-4 w-4" />
						<AlertTitle>Success</AlertTitle>
						<AlertDescription>QR code saved successfully!</AlertDescription>
					</Alert>
					<div className="flex flex-wrap gap-2">
						{downloadSupported ? (
							<>
								<Button
									onClick={handleDirectDownload}
									variant="secondary"
									className="flex items-center gap-1 touch-manipulation"
								>
									<Download className="h-4 w-4" />
									Download Exact QR Code
								</Button>
								<Button
									onClick={handleDownload}
									variant="outline"
									className="flex items-center gap-1 touch-manipulation"
								>
									<Download className="h-4 w-4" />
									Download Original
								</Button>
							</>
						) : (
							<>
								<Alert
									variant="warning"
									className="bg-amber-50 border-amber-200"
								>
									<HelpCircle className="h-4 w-4" />
									<AlertTitle>Download Not Supported</AlertTitle>
									<AlertDescription>
										Your browser may not support direct downloads. You can copy
										the URL instead.
									</AlertDescription>
								</Alert>
								<Button
									onClick={handleCopyQrValue}
									variant="secondary"
									className="flex items-center gap-1 touch-manipulation"
								>
									Copy QR Code URL
								</Button>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
````

## File: src/components/ui/button.tsx
````typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation active:scale-[0.98] tap-highlight-transparent",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-14 px-5 py-4",
				sm: "h-10 rounded-md px-3 text-sm",
				lg: "h-16 rounded-md px-6 text-lg",
				icon: "h-12 w-12",
				"icon-sm": "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);
export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		const buttonRef = React.useRef<HTMLButtonElement>(null);
		const setRefs = React.useCallback(
			(element: HTMLButtonElement | null) => {
				buttonRef.current = element;
				if (typeof ref === "function") {
					ref(element);
				} else if (ref) {
					ref.current = element;
				}
			},
			[ref],
		);
		React.useEffect(() => {
			if (!buttonRef.current) return;
			const button = buttonRef.current;
			button.classList.add("touch-manipulation");
			const handlePointerDown = (e: PointerEvent) => {
				if (e.pointerType === "touch") {
					e.preventDefault();
				}
			};
			button.addEventListener("pointerdown", handlePointerDown, {
				passive: false,
			});
			return () => {
				button.removeEventListener("pointerdown", handlePointerDown);
			};
		}, []);
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={setRefs}
				{...props}
				onTouchStart={(e) => {
					props.onTouchStart?.(e);
				}}
			/>
		);
	},
);
Button.displayName = "Button";
export { Button, buttonVariants };
````

## File: src/db/schema.ts
````typescript
import {
	pgTable,
	bigserial,
	text,
	unique,
	boolean,
	foreignKey,
	jsonb,
	timestamp,
	integer,
	uniqueIndex,
	bigint,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
export const restaurants = pgTable("restaurants", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	name: text().notNull(),
	description: text().notNull(),
	imageUrl: text("image_url").notNull(),
	address: text().notNull(),
	qrCodeUrl: text("qr_code_url"),
});
export const restaurantDeals = pgTable(
	"restaurant_deals",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		restaurantId: bigint("restaurant_id", { mode: "bigint" }).notNull(),
		title: text().notNull(),
		content: text().notNull(),
		active: boolean().default(true),
		createdAt: timestamp("created_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
		updatedAt: timestamp("updated_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.restaurantId],
			foreignColumns: [restaurants.id],
			name: "restaurant_deals_restaurant_id_restaurants_id_fk",
		}),
	],
);
export const users = pgTable(
	"users",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		clerkId: text("clerk_id").notNull(),
		name: text().notNull(),
		isStaff: boolean("is_staff").default(false),
		isAdmin: boolean("is_admin").default(false),
		email: text().notNull(),
		phone: text(),
	},
	(table) => [
		unique("users_clerk_id_unique").on(table.clerkId),
		unique("users_email_key").on(table.email),
		unique("users_phone_key").on(table.phone),
	],
);
export const achievements = pgTable(
	"achievements",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		userId: bigint("user_id", { mode: "bigint" }).notNull(),
		type: text().notNull(),
		data: jsonb().default({}).notNull(),
		unlockedAt: timestamp("unlocked_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "achievements_user_id_users_id_fk",
		}),
	],
);
export const pointBalances = pgTable(
	"point_balances",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		userId: bigint("user_id", { mode: "bigint" }).notNull(),
		points: integer().default(0).notNull(),
		updatedAt: timestamp("updated_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "point_balances_user_id_users_id_fk",
		}),
	],
);
export const pointTransfers = pgTable(
	"point_transfers",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		fromUserId: bigint("from_user_id", { mode: "bigint" }).notNull(),
		toUserId: bigint("to_user_id", { mode: "bigint" }).notNull(),
		points: integer().notNull(),
		message: text(),
		status: text().notNull(),
		createdAt: timestamp("created_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.fromUserId],
			foreignColumns: [users.id],
			name: "point_transfers_from_user_id_users_id_fk",
		}),
		foreignKey({
			columns: [table.toUserId],
			foreignColumns: [users.id],
			name: "point_transfers_to_user_id_users_id_fk",
		}),
	],
);
export const punchCards = pgTable(
	"punch_cards",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		userId: bigint("user_id", { mode: "bigint" }).notNull(),
		restaurantId: bigint("restaurant_id", { mode: "bigint" }).notNull(),
		punches: integer().default(0),
		completed: boolean().default(false),
		updatedAt: timestamp("updated_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		uniqueIndex("unique_restaurant_user_idx").on(
			table.userId,
			table.restaurantId,
		),
		foreignKey({
			columns: [table.restaurantId],
			foreignColumns: [restaurants.id],
			name: "punch_cards_restaurant_id_restaurants_id_fk",
		}),
		foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "punch_cards_user_id_users_id_fk",
		}),
	],
);
export const prizes = pgTable(
	"prizes",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		name: text().notNull(),
		description: text().notNull(),
		imageUrl: text("image_url").notNull(),
		type: text().notNull(),
		restaurantId: bigint("restaurant_id", { mode: "bigint" }).notNull(),
		requiredPunches: integer("required_punches").notNull(),
		available: boolean().default(true),
		quantity: integer().default(0),
		rules: jsonb().default({}).notNull(),
		createdAt: timestamp("created_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.restaurantId],
			foreignColumns: [restaurants.id],
			name: "prizes_restaurant_id_restaurants_id_fk",
		}),
	],
);
export const prizeRedemptions = pgTable(
	"prize_redemptions",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		userId: bigint("user_id", { mode: "bigint" }).notNull(),
		prizeId: bigint("prize_id", { mode: "bigint" }).notNull(),
		punchCardId: bigint("punch_card_id", { mode: "bigint" }).notNull(),
		status: text().notNull(),
		redeemedAt: timestamp("redeemed_at", {
			withTimezone: true,
			mode: "string",
		}),
		expiresAt: timestamp("expires_at", { withTimezone: true, mode: "string" }),
		createdAt: timestamp("created_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.prizeId],
			foreignColumns: [prizes.id],
			name: "prize_redemptions_prize_id_prizes_id_fk",
		}),
		foreignKey({
			columns: [table.punchCardId],
			foreignColumns: [punchCards.id],
			name: "prize_redemptions_punch_card_id_punch_cards_id_fk",
		}),
		foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "prize_redemptions_user_id_users_id_fk",
		}),
	],
);
export const raffleEntries = pgTable(
	"raffle_entries",
	{
		id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
		userId: bigint("user_id", { mode: "bigint" }).notNull(),
		punchCardId: bigint("punch_card_id", { mode: "bigint" }).notNull(),
		createdAt: timestamp("created_at", {
			withTimezone: true,
			mode: "string",
		}).defaultNow(),
	},
	(table) => [
		foreignKey({
			columns: [table.punchCardId],
			foreignColumns: [punchCards.id],
			name: "raffle_entries_punch_card_id_punch_cards_id_fk",
		}),
		foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "raffle_entries_user_id_users_id_fk",
		}),
	],
);
````

## File: src/features/restaurants/RestaurantCard.tsx
````typescript
"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Tag } from "lucide-react";
import type { Restaurant, RestaurantDetailPayload } from "@/types/db";
export function RestaurantCard({
	restaurant,
}: { restaurant: RestaurantDetailPayload }) {
	const hasDeals = restaurant.deals && restaurant.deals.length > 0;
	return (
		<div className="block w-full group h-full">
			<div
				className={cn(
					"relative overflow-hidden rounded-lg",
					"bg-white/80 dark:bg-zinc-900/80",
					"backdrop-blur-xl",
					"border border-zinc-200/50 dark:border-zinc-800/50",
					"shadow-md",
					"transition-all duration-300",
					"hover:shadow-lg",
					"hover:border-zinc-300/50 dark:hover:border-zinc-700/50 h-full",
				)}
			>
				<div className="relative h-[200px] w-full overflow-hidden">
					<Image
						src={"/RWP.jpg"}
						alt={restaurant.name}
						fill
						className="object-cover h-full w-full"
					/>
				</div>
				<div
					className={cn(
						"absolute inset-0",
						"bg-gradient-to-t from-black/90 via-black/40 to-transparent",
					)}
				/>
				{hasDeals && (
					<div className="absolute top-3 left-3 z-10">
						<div
							className={cn(
								"px-2.5 py-1 rounded-full text-xs font-medium flex items-center",
								"bg-blue-500/90 text-white",
								"backdrop-blur-md",
								"shadow-xs",
								"border border-blue-400/50",
							)}
						>
							<Tag className="w-3 h-3 mr-1" />
							<span>Deals</span>
						</div>
					</div>
				)}
				<div className="absolute top-3 right-3 z-10">
					<Link
						href={`/restaurants/${restaurant.id}`}
						className={cn(
							"px-2.5 py-1 rounded-full text-xs font-medium",
							"bg-white/90 text-zinc-800",
							"dark:bg-zinc-900/90 dark:text-zinc-200",
							"backdrop-blur-md",
							"shadow-xs",
							"border border-white/20 dark:border-zinc-800/50",
						)}
					>
						View
					</Link>
				</div>
				<div className="absolute bottom-0 left-0 right-0 p-5">
					<div className="flex items-center justify-between gap-3">
						<div className="space-y-1.5">
							<h3 className="text-lg font-semibold text-white dark:text-zinc-100 leading-snug">
								{restaurant.name}
								{hasDeals && (
									<span className="ml-2 text-xs text-zinc-300 dark:text-zinc-400">
										{restaurant.deals?.length} deals
									</span>
								)}
							</h3>
							{hasDeals && restaurant.deals && restaurant.deals[0] && (
								<div>
									<p className="text-xs text-zinc-300 dark:text-zinc-400">
										<b>{restaurant.deals[0].content}</b>
									</p>
								</div>
							)}
							{
}
						</div>
						<Link
							href={`${restaurant.address}`}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								"p-2 rounded-full",
								"bg-white/10 dark:bg-zinc-800/50",
								"backdrop-blur-md",
								"group-hover:bg-white/20 dark:group-hover:bg-zinc-700/50",
								"transition-colors duration-300",
							)}
						>
							<ArrowUpRight className="w-4 h-4 text-white group-hover:-rotate-12 transition-transform duration-300" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
````

## File: src/hooks/use-handle-qrCode.tsx
````typescript
"use client";
import { saveQRCodeUrl } from "@/app/admin/restaurants/actions";
import type { Restaurant } from "@/types/db";
import { useRef, useState, useCallback, useEffect } from "react";
export const useHandleQRCode = ({ restaurant }: { restaurant: Restaurant }) => {
	const [generating, setGenerating] = useState(false);
	const [saving, setSaving] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(restaurant.qrCodeUrl || null);
	const [qrCodeValue, setQrCodeValue] = useState<string>(`/api/restaurants/${restaurant.id}/scan`);
	const qrRef = useRef<HTMLDivElement>(null);
	const handleGenerate = useCallback(() => {
		const newQrCodeValue = `/api/restaurants/${restaurant.id}/scan`;
		setQrCodeValue(newQrCodeValue);
		setGenerating(true);
		setError(null);
		setSuccess(false);
		setQrCodeDataUrl(null);
	}, [restaurant.id]);
	const handleCancel = useCallback(() => {
		setGenerating(false);
		setError(null);
		setQrCodeValue(`/api/restaurants/${restaurant.id}/scan`);
	}, [restaurant.id]);
	const handleDownload = useCallback(() => {
		if (!qrCodeDataUrl && !qrRef.current) {
			setError("No QR code found to download");
			return;
		}
		try {
			let dataUrl = qrCodeDataUrl;
			if (!dataUrl && qrRef.current) {
				const svgElement = qrRef.current.querySelector("svg");
				if (!svgElement) {
					throw new Error("QR code SVG not found");
				}
				const clonedSvg = svgElement.cloneNode(true) as SVGElement;
				clonedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
				if (!clonedSvg.hasAttribute("width")) {
					clonedSvg.setAttribute("width", "200");
				}
				if (!clonedSvg.hasAttribute("height")) {
					clonedSvg.setAttribute("height", "200");
				}
				clonedSvg.setAttribute("style", "background-color: white");
				const svgData = new XMLSerializer().serializeToString(clonedSvg);
				const encodedData = encodeURIComponent(svgData);
				dataUrl = `data:image/svg+xml;charset=utf-8,${encodedData}`;
			}
			if (!dataUrl) {
				throw new Error("Failed to generate QR code data URL");
			}
			const isSafari = /^((?!chrome|android).)*safari/i.test(
				navigator.userAgent,
			);
			const filename = `${restaurant.name.replace(/\s+/g, "-").toLowerCase()}-qrcode.svg`;
			if (isSafari) {
				const newTab = window.open();
				if (newTab) {
					newTab.document.write(`
						<html>
							<head>
								<title>Download QR Code</title>
								<style>
									body {
										display: flex;
										flex-direction: column;
										align-items: center;
										justify-content: center;
										height: 100vh;
										font-family: system-ui, sans-serif;
									}
									.instructions {
										margin: 20px;
										max-width: 400px;
										text-align: center;
									}
								</style>
							</head>
							<body>
								<img src="${dataUrl}" alt="QR Code" width="300" height="300" />
								<div class="instructions">
									<p>Right-click or long-press the image and select "Save Image As" to download.</p>
									<p>Filename: ${filename}</p>
								</div>
							</body>
						</html>
					`);
					newTab.document.close();
				} else {
					throw new Error(
						"Could not open download window. Please check your popup blocker settings.",
					);
				}
			} else {
				const link = document.createElement("a");
				link.href = dataUrl;
				link.download = filename;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		} catch (err) {
			console.error("Download failed:", err);
			setError(
				err instanceof Error ? err.message : "Failed to download QR code",
			);
		}
	}, [qrCodeDataUrl, restaurant.name]);
	const handleSave = useCallback(async () => {
		setSaving(true);
		setError(null);
		try {
			if (!qrRef.current) {
				throw new Error("QR code container not found");
			}
			const svgElement = qrRef.current.querySelector("svg");
			if (!svgElement) {
				throw new Error("QR code SVG not found");
			}
			const clonedSvg = svgElement.cloneNode(true) as SVGElement;
			clonedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
			if (!clonedSvg.hasAttribute("width")) {
				clonedSvg.setAttribute("width", "200");
			}
			if (!clonedSvg.hasAttribute("height")) {
				clonedSvg.setAttribute("height", "200");
			}
			clonedSvg.setAttribute("style", "background-color: white");
			const svgData = new XMLSerializer().serializeToString(clonedSvg);
			let dataUrl: string;
			try {
				const blob = new Blob([svgData], { type: "image/svg+xml" });
				dataUrl = await new Promise<string>((resolve, reject) => {
					const reader = new FileReader();
					reader.onload = () => resolve(reader.result as string);
					reader.onerror = reject;
					reader.readAsDataURL(blob);
				});
			} catch (blobError) {
				console.warn(
					"Blob approach failed, falling back to base64:",
					blobError,
				);
				dataUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgData)))}`;
			}
			const result = await saveQRCodeUrl(restaurant.id.toString(), dataUrl);
			if (result && result.success) {
				setSuccess(true);
				setGenerating(false);
				setQrCodeDataUrl(dataUrl);
			} else {
				throw new Error(result?.error || "Failed to save QR code");
			}
		} catch (err) {
			console.error("Save error:", err);
			setError(
				err instanceof Error
					? err.message
					: "An error occurred while saving the QR code",
			);
		} finally {
			setSaving(false);
		}
	}, [restaurant.id]);
	useEffect(() => {
		if (restaurant?.id) {
			setQrCodeValue(`/api/restaurants/${restaurant.id}/scan`);
		}
	}, [restaurant?.id]);
	return {
		qrCodeDataUrl,
		qrCodeValue,
		handleGenerate,
		handleCancel,
		handleDownload,
		handleSave,
		generating,
		saving,
		success,
		error,
		qrRef,
	};
};
````

## File: src/types/db.ts
````typescript
export type User = {
	id: bigint;
	clerkId: string;
	name: string;
	isStaff?: boolean | undefined;
	isAdmin?: boolean | undefined;
	email: string;
	phone?: string | null;
	punchCards?: PunchCard[];
	achievements?: Achievement[];
	pointBalances?: PointBalance[];
	raffleEntries?: RaffleEntry[];
};
export type Restaurant = {
	id: bigint;
	name: string;
	description: string;
	imageUrl: string;
	address: string;
	deals?: Deal[];
	qrCodeUrl: string | null;
	punchCardCount?: number;
	punchCards?: PunchCard[];
};
export type PunchCard = {
	id: bigint;
	userId: bigint;
	restaurantId: bigint;
	punches: number;
	completed: boolean;
	updatedAt: Date;
};
export type RaffleEntry = {
	id: bigint;
	userId: bigint;
	punchCardId: bigint;
	createdAt: Date;
};
export type PrizeRules = {
	expirationDays?: number;
	usageLimit?: number;
	terms?: string;
	[key: string]: unknown;
};
export type Prize = {
	id: bigint;
	name: string;
	description: string;
	imageUrl: string;
	type: string;
	restaurantId: bigint;
	requiredPunches: number;
	available: boolean;
	quantity: number;
	rules: PrizeRules;
	createdAt: Date;
};
export interface RestaurantDetailPayload extends Restaurant {
	prizes: Prize[];
}
export type RedemptionStatus = "pending" | "redeemed" | "expired" | "cancelled";
export type PrizeRedemption = {
	id: bigint;
	userId: bigint;
	prizeId: bigint;
	punchCardId: bigint;
	status: RedemptionStatus;
	redeemedAt: Date | null;
	expiresAt: Date | null;
	createdAt: Date;
};
export type PointBalance = {
	id: bigint;
	userId: bigint;
	points: number;
	updatedAt: Date;
};
export type TransferStatus = "pending" | "completed" | "cancelled";
export type PointTransfer = {
	id: bigint;
	fromUserId: bigint;
	toUserId: bigint;
	points: number;
	message: string | null;
	status: TransferStatus;
	createdAt: Date;
};
export type AchievementType =
	| "first_transfer"
	| "transfer_milestone"
	| "punch_card_complete"
	| "prize_redemption";
export type AchievementData = {
	milestone?: number;
	restaurantId?: bigint;
	prizeId?: bigint;
	[key: string]: unknown;
};
export type Achievement = {
	id: bigint;
	userId: bigint;
	type: AchievementType;
	data: AchievementData;
	unlockedAt: Date;
};
export type Deal = {
	id: bigint;
	title: string;
	content: string;
	imageUrl: string;
	active: boolean;
	restaurantId: bigint;
	createdAt: Date;
	updatedAt: Date;
};
export interface RestaurantDetailPayload extends Restaurant {
	deals?: Deal[];
	prizes?: Prize[];
	punchCards?: PunchCard[];
	dealCount?: number;
	prizeCount?: number;
	punchCardCount?: number;
}
export interface RestaurantDetailPayload extends Restaurant {
	deals?: Deal[];
	prizes?: Prize[];
	punchCards?: PunchCard[];
	dealCount?: number;
	prizeCount?: number;
	punchCardCount?: number;
}
````

## File: src/app/(public)/restaurants/page.tsx
````typescript
import Link from 'next/link'
import Image from 'next/image'
import {getRestaurants} from '@/db/models/restaurants/restaurants'
import type {Restaurant} from '@/types/db'
import {RestaurantsList} from '@/features/restaurants/RestaurantList'
export interface RestaurantsPageProps {
  searchParams: Promise<{
    deals?: string
  }>
}
export default async function RestaurantsPage({
  searchParams,
}: RestaurantsPageProps) {
  const restaurants = await getRestaurants()
  console.log('🚀 ~ restaurants:', restaurants)
  const params = await searchParams
  const hasDeals = params.deals === 'true'
  const sortedRestaurants = [...restaurants].sort((a, b) =>
    a.name.localeCompare(b.name)
  )
  return (
    <div className='px-4 py-8 h-full w-full overflow-auto'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold'>Restaurants</h1>
        <Link
          href='/'
          className='text-blue-600 hover:text-blue-800 transition-colors'
        >
          Back to Home
        </Link>
      </div>
      <div className='mb-8'>
        <p className='text-gray-600'>
          Explore our partner restaurants and start collecting stamps on your
          food passport!
        </p>
      </div>
      <RestaurantsList
        restaurants={sortedRestaurants}
        initialHasDeals={hasDeals}
      />
    </div>
  )
}
````

## File: src/features/restaurants/RestaurantList.tsx
````typescript
'use client'
import {motion} from 'framer-motion'
import {RestaurantCard} from './RestaurantCard'
import {RestaurantSearchBar} from './RestaurantSearchBar'
import {useRestaurantSearch} from '@/hooks/useRestaurantSearch'
import type {Restaurant, RestaurantDetailPayload} from '@/types/db'
import {InView} from '@/components/ui/in-view'
export function RestaurantsLoading() {
  const skeletonIds = ['sk1', 'sk2', 'sk3', 'sk4', 'sk5', 'sk6']
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {skeletonIds.map((id) => (
        <div
          key={id}
          className='bg-white rounded-lg shadow-md p-0 overflow-hidden animate-pulse'
        >
          <div className='h-48 bg-gray-200 w-full' />
          <div className='p-4'>
            <div className='h-6 bg-gray-200 w-3/4 mb-2' />
            <div className='h-4 bg-gray-200 w-full mb-2' />
            <div className='h-4 bg-gray-200 w-full mb-2' />
            <div className='h-4 bg-gray-200 w-1/2' />
          </div>
        </div>
      ))}
    </div>
  )
}
export function RestaurantsList({
  restaurants,
  initialHasDeals = false,
}: {
  restaurants: RestaurantDetailPayload[]
  initialHasDeals?: boolean
}) {
  const {
    filteredRestaurants,
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    isSearching,
    hasDeals,
    setHasDeals,
  } = useRestaurantSearch({
    restaurants,
    hasDeals: initialHasDeals,
  })
  return (
    <>
      <RestaurantSearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOption={sortOption}
        onSortChange={setSortOption}
        hasDeals={hasDeals}
        onDealsChange={setHasDeals}
      />
      {filteredRestaurants.length === 0 ? (
        <div className='text-center py-10'>
          <h3 className='text-lg font-medium mb-2'>No restaurants found</h3>
          <p className='text-gray-500'>
            Try adjusting your search or filters to find what you're looking
            for.
          </p>
        </div>
      ) : (
        <InView
          viewOptions={{}}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl px-4 auto-rows-fr'>
            {filteredRestaurants.map((restaurant) => (
              <motion.div
                variants={{
                  hidden: {opacity: 0, scale: 0.8, filter: 'blur(10px)'},
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                  },
                }}
                key={restaurant.id.toString()}
                className='w-full min-h-[300px]'
              >
                <RestaurantCard restaurant={restaurant} />
              </motion.div>
            ))}
          </div>
        </InView>
      )}
    </>
  )
}
````

## File: src/features/users/UserPunchCard.tsx
````typescript
'use client'
import type {PunchCardWithRestaurant as ApiPunchCardWithRestaurant} from '@/types/api'
import type {PunchCardWithRestaurant as HookPunchCardWithRestaurant} from '@/hooks/use-punch-card-subscription'
import {PunchCard} from '@/components/ui/punchcard'
interface UserPunchCardProps {
  restaurants: ApiPunchCardWithRestaurant[] | HookPunchCardWithRestaurant[]
}
export function UserPunchCard({restaurants}: UserPunchCardProps) {
  return <PunchCard restaurants={restaurants} />
}
````

## File: src/lib/auth.ts
````typescript
import type { EmailAddress, User } from "@clerk/nextjs/server";
import type { User as DBUser } from "@/types/db";
const ADMIN_AUTH_IDS = [
	"user_2tYiqnTGiP8byuUu4XBmfu6eNZ0",
	"user_2su5eFUSw9IPPmzZAxT6s8VFOnY",
];
export function isAdmin(user: User | unknown | DBUser | null): boolean {
	if (!user) return false;
	console.log("🚀 ~ isAdmin ~ user:", user);
	if (ADMIN_AUTH_IDS.includes(user?.id || user?.clerkId)) return true;
	return (
		user?.primaryEmailAddress?.emailAddress === "liamhellis@gmail.com" ||
		user?.primaryEmailAddress?.emailAddress === "sam@clubhausagency.com" ||
		user?.publicMetadata?.role === "admin"
	);
}
export function canAccessAdminResource(user: string | null): boolean {
	return isAdmin(user);
}
export function canEditRestaurant(
	user: string | null,
	restaurantId: string,
): boolean {
	if (isAdmin(user)) return true;
	return false;
}
````

## File: src/components/admin/restaurant-quick-view.tsx
````typescript
'use client'
import {useState, type ReactNode} from 'react'
import {Button} from '@/components/ui/button'
import {Eye, Plus} from 'lucide-react'
import {
  createRestaurantDeal,
  getRestaurantByIdWithAll,
} from '@/db/models/restaurants/restaurants'
import type {Restaurant, Prize, PunchCard} from '@/types/db'
import {toast} from 'sonner'
import {BentoGrid} from '@/components/kokonutui/bento-grid'
import {
  Utensils,
  Award,
  CreditCard,
  Users,
  CalendarClock,
  BadgeCheck,
  Tag,
  PlusCircle,
  QrCode,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Textarea} from '@/components/ui/textarea'
import {Checkbox} from '@/components/ui/checkbox'
import {DealsList, EmptyDeals} from './restaurant-deals-display'
import {QRCodeManager} from '@/app/admin/restaurants/qr-code-manager'
interface BentoItem {
  id: string
  title: string
  description: string | ReactNode
  icon: ReactNode
  status?: string
  tags?: string[]
  meta?: string
  hasPersistentHover?: boolean
}
export interface Deal {
  id?: string
  restaurantId: bigint
  title: string
  content: string
  isActive: boolean
}
interface DetailedRestaurant extends Restaurant {
  prizes: Prize[]
  punchCards: PunchCard[]
  punchCardCount: number
  deals?: Deal[]
}
interface RestaurantQuickViewProps {
  restaurantId: bigint
}
export function RestaurantQuickView({restaurantId}: RestaurantQuickViewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [restaurantData, setRestaurantData] =
    useState<DetailedRestaurant | null>(null)
  const [isDealDialogOpen, setIsDealDialogOpen] = useState(false)
  const [newDeal, setNewDeal] = useState({
    title: '',
    content: '',
    isActive: true,
  })
  const handleOpen = async () => {
    if (!isLoading) {
      setIsLoading(true)
      try {
        const data = await getRestaurantByIdWithAll(restaurantId)
        if (data) {
          // Transform the data to match our expected types
          const transformedData = {
            ...data,
            prizes: data.prizes.map((prize) => ({
              ...prize,
              // Convert createdAt string to Date safely
              createdAt:
                typeof prize.createdAt === 'string'
                  ? new Date(prize.createdAt)
                  : new Date(),
            })),
            punchCards: data.punchCards.map((card) => ({
              ...card,
              updatedAt:
                typeof card.updatedAt === 'string'
                  ? new Date(card.updatedAt)
                  : new Date(),
            })),
            deals: data.deals || [
              {
                id: 'deal-1',
                title: 'Happy Hour',
                description: '50% off on all drinks from 5PM to 7PM',
                isActive: true,
                createdAt: new Date(),
                expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
              },
              {
                id: 'deal-2',
                title: 'Weekend Special',
                description: 'Buy one get one free on desserts on weekends',
                isActive: true,
                createdAt: new Date(),
                expiresAt: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
              },
            ],
          }
          setRestaurantData(transformedData as unknown as DetailedRestaurant)
          setIsOpen(true)
        } else {
          toast.error('Error', {
            description: 'Restaurant not found',
          })
        }
      } catch (error) {
        console.error('Error fetching restaurant data:', error)
        toast.error('Error', {
          description: 'Failed to load restaurant details',
        })
      } finally {
        setIsLoading(false)
      }
    }
  }
  const handleClose = () => {
    setIsOpen(false)
    setRestaurantData(null)
  }
  const handleOpenDealDialog = () => {
    setIsDealDialogOpen(true)
  }
  const handleCreateDeal = async () => {
    if (!restaurantData) return
    const deal = {
      restaurantId: BigInt(restaurantData.id),
      title: newDeal.title,
      content: newDeal.content,
      active: newDeal.isActive,
    }
    const createdDeal = await createRestaurantDeal(deal).then((res) => res[0])
    console.log('🚀 ~ handleCreateDeal ~ createdDeal:', createdDeal)
    const updatedRestaurant: DetailedRestaurant = {
      ...restaurantData,
      deals: [...(restaurantData.deals || []), createdDeal],
    }
    setRestaurantData(updatedRestaurant)
    console.log(
      '🚀 ~ awaitcreateRestaurantDeal ~ updatedRestaurant:',
      updatedRestaurant
    )
    setNewDeal({
      title: '',
      content: '',
      isActive: true,
    })
    setIsDealDialogOpen(false)
    // Show a success toast
    toast.success('New deal created successfully')
  }
  const getBentoItems = () => {
    if (!restaurantData) return []
    const items: BentoItem[] = [
      {
        id: `restaurant-${restaurantData.id.toString()}`,
        title: restaurantData.name,
        description: restaurantData.description || 'No description available',
        icon: <Utensils className='w-4 h-4 text-orange-500' />,
        status: 'Active',
        tags: ['Restaurant'],
        meta: `ID: ${restaurantData.id.toString()}`,
        hasPersistentHover: true,
      },
    ]
    items.push({
      id: `qrcode-${restaurantData.id.toString()}`,
      title: 'Restaurant QR Code',
      description: (
        <div className='flex flex-col items-center space-y-2'>
          {restaurantData.qrCodeUrl ? (
            <div className='flex flex-col items-center'>
              <div className='relative w-24 h-24 mb-2'>
                <img
                  src={restaurantData.qrCodeUrl}
                  alt='QR Code'
                  className='w-24 h-24 object-contain'
                />
              </div>
              <span className='text-xs text-gray-500'>Scan to add punch</span>
            </div>
          ) : (
            <div className='flex flex-col items-center p-2'>
              <div className='text-xs text-gray-500 mb-2'>
                No QR code generated yet
              </div>
            </div>
          )}
          <div className='mt-2'>
            <QRCodeManager restaurant={restaurantData} variant='compact' />
          </div>
        </div>
      ),
      icon: <QrCode className='w-4 h-4 text-purple-500' />,
      status: restaurantData.qrCodeUrl ? 'Active' : 'Not Generated',
      tags: ['QR Code', 'Punch Cards'],
      hasPersistentHover: false,
    })
    if (restaurantData.deals && restaurantData.deals.length > 0) {
      const activeDeals = restaurantData.deals.filter(
        (deal) => deal.isActive
      ).length
      items.push({
        id: `deals-${restaurantData.id.toString()}`,
        title: 'Restaurant Deals',
        description: (
          <DealsList
            deals={restaurantData.deals}
            activeDeals={activeDeals}
            onCreateDeal={handleOpenDealDialog}
          />
        ),
        icon: <Tag className='w-4 h-4 text-blue-500' />,
        status: 'Active',
        tags: ['Deals', 'Promotions'],
        meta: `${activeDeals} active`,
        hasPersistentHover: false,
      })
    } else {
      items.push({
        id: `deals-empty-${restaurantData.id.toString()}`,
        title: 'Restaurant Deals',
        description: <EmptyDeals onCreateDeal={handleOpenDealDialog} />,
        icon: <Tag className='w-4 h-4 text-blue-500' />,
        status: 'Empty',
        tags: ['Deals', 'Promotions'],
        hasPersistentHover: false,
      })
    }
    if (restaurantData.punchCards.length > 0) {
      const activeCards = restaurantData.punchCards.filter(
        (card) => !card.completed
      ).length
      items.push({
        id: `punch-cards-${restaurantData.id.toString()}`,
        title: 'Punch Cards',
        description: `${activeCards} active punch cards, ${
          restaurantData.punchCards.length - activeCards
        } completed`,
        icon: <CreditCard className='w-4 h-4 text-blue-500' />,
        status: 'Active',
        tags: ['Cards', 'Loyalty'],
        meta: `${restaurantData.punchCards.length} total`,
        hasPersistentHover: false,
      })
    }
    const uniqueUsers = new Set(
      restaurantData.punchCards.map((card) => card.userId)
    ).size
    items.push({
      id: `engagement-${restaurantData.id.toString()}`,
      title: 'Customer Engagement',
      description: `${uniqueUsers} unique customers have punch cards`,
      icon: <Users className='w-4 h-4 text-purple-500' />,
      status: 'Analytics',
      tags: ['Users', 'Engagement'],
      meta: `${uniqueUsers} users`,
      hasPersistentHover: false,
    })
    const recentCards = restaurantData.punchCards.filter((card) => {
      const updatedDate = new Date(card.updatedAt)
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
      return updatedDate > thirtyDaysAgo
    }).length
    items.push({
      id: `activity-${restaurantData.id.toString()}`,
      title: 'Recent Activity',
      description: `${recentCards} punch cards updated in the last 30 days`,
      icon: <CalendarClock className='w-4 h-4 text-green-500' />,
      status: 'Active',
      tags: ['Recent', 'Activity'],
      meta: 'Last 30 days',
      hasPersistentHover: false,
    })
    const completedCards = restaurantData.punchCards.filter(
      (card) => card.completed
    ).length
    const completionRate =
      restaurantData.punchCards.length > 0
        ? Math.round((completedCards / restaurantData.punchCards.length) * 100)
        : 0
    items.push({
      id: `completion-${restaurantData.id.toString()}`,
      title: 'Completion Rate',
      description: `${completionRate}% of punch cards have been completed`,
      icon: <BadgeCheck className='w-4 h-4 text-indigo-500' />,
      status: 'Metrics',
      tags: ['Completion', 'Analytics'],
      meta: `${completedCards} completed`,
      hasPersistentHover: false,
    })
    return items
  }
  return (
    <>
      <Button
        variant='ghost'
        size='icon'
        onClick={handleOpen}
        disabled={isLoading}
        className='h-8 w-8'
      >
        <Eye className='h-4 w-4' />
      </Button>
      {isOpen && restaurantData && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
          <div className='relative bg-white dark:bg-gray-900 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-auto'>
            <div className='sticky top-0 p-4 flex justify-between items-center border-b dark:border-gray-800 bg-white dark:bg-gray-900 z-10'>
              <h2 className='text-xl font-bold'>
                {restaurantData.name} Overview
              </h2>
              <Button variant='ghost' size='sm' onClick={handleClose}>
                Close
              </Button>
            </div>
            <div className='p-1'>
              <BentoGrid items={getBentoItems()} />
            </div>
          </div>
        </div>
      )}
      {}
      <Dialog open={isDealDialogOpen} onOpenChange={setIsDealDialogOpen}>
        <DialogContent className='sm:max-w-[500px]'>
          <DialogHeader>
            <DialogTitle>Create New Deal</DialogTitle>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='title' className='text-right'>
                Deal Title
              </Label>
              <Input
                id='title'
                placeholder='Happy Hour, Weekend Special, etc.'
                className='col-span-3'
                value={newDeal.title}
                onChange={(e) =>
                  setNewDeal({...newDeal, title: e.target.value})
                }
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'>
                Description
              </Label>
              <Textarea
                id='description'
                placeholder='Describe what the deal offers...'
                className='col-span-3'
                value={newDeal.content}
                onChange={(e) =>
                  setNewDeal({...newDeal, content: e.target.value})
                }
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='isActive' className='text-right'>
                Active
              </Label>
              <div className='col-span-3 flex items-center space-x-2'>
                <Checkbox
                  id='isActive'
                  checked={newDeal.isActive}
                  onCheckedChange={(checked: boolean) =>
                    setNewDeal({...newDeal, isActive: checked})
                  }
                />
                <label
                  htmlFor='isActive'
                  className='text-sm text-gray-500 dark:text-gray-400'
                >
                  Make this deal active immediately
                </label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type='button'
              variant='outline'
              onClick={() => setIsDealDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type='button'
              onClick={handleCreateDeal}
              disabled={!newDeal.title || !newDeal.content}
            >
              Create Deal
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
````

## File: src/features/restaurants/restaurant-detail/RestaurantDetail.tsx
````typescript
'use client'
import {getUserByClerkId} from '@/db/models/users/users'
import {PrizeCard} from '@/features/prizes/prize-card/PrizeCard'
import {UserScanQrCode} from '@/features/users'
import {GetUserRestaurantPunchCard} from '@/features/users/GetUserPunchCard'
import {DealsList} from '@/features/deals'
import {
  PunchCard,
  PUNCH_THRESHOLD,
} from '@/components/ui/restaurant-specific-user-punch-card'
import type {
  Deal,
  PunchCard as PunchCardType,
  RestaurantDetailPayload,
  User,
} from '@/types/db'
import {useUser} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {Badge} from '@/components/ui/badge'
import {
  MapPin,
  Clock,
  Info,
  Gift,
  Tag,
  QrCode,
  User as UserIcon,
} from 'lucide-react'
export function RestaurantDetail({
  restaurant: restaurantDetail,
  userPunchCard,
  user,
}: {
  restaurant: RestaurantDetailPayload
  user: User
  userPunchCard: PunchCardType
}) {
  const [userData, setUserData] = useState<User | null>(user)
  const [userPunchCardData, setUserPunchCardData] =
    useState<PunchCardType | null>(userPunchCard || null)
  const {user: clerkUser} = useUser()
  useEffect(() => {
    if (clerkUser?.id && !userData) {
      getUserByClerkId(clerkUser.id).then((res) => {
        if (res) {
          setUserData(user)
        }
      })
    }
  }, [clerkUser, userData, user])
  const {prizes = [], deals = [], ...restaurant} = restaurantDetail
  const formattedDeals = deals?.map((deal) => ({
    id: deal.id,
    restaurantId: deal.restaurantId,
    title: deal.title,
    content: deal.content,
    active: deal.active,
    createdAt: deal.createdAt ? deal.createdAt.toString() : null,
    updatedAt: deal.updatedAt ? deal.updatedAt.toString() : null,
    imageUrl: deal.imageUrl,
    restaurant: {
      id: restaurant.id,
      name: restaurant.name,
      imageUrl: restaurant.imageUrl,
    },
  }))
  return (
    <div className='grid gap-6 pb-12'>
      {}
      <div className='relative h-64 w-full rounded-xl overflow-hidden'>
        <Image
          src={'/RWP.jpg'}
          alt={restaurant.name}
          className='object-cover'
          sizes='100vw'
          priority
          fill
        />
        <div className='absolute inset-0 bg-black bg-opacity-40' />
        <div className='absolute bottom-0 left-0 p-6'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            {restaurant.name}
          </h1>
          <div className='flex items-center text-white text-opacity-90'>
            <MapPin className='w-4 h-4 mr-2' />
            <p>{restaurant.address}</p>
          </div>
        </div>
      </div>
      {}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {}
        <div className='bg-white rounded-xl shadow-sm border p-6 col-span-full md:col-span-2'>
          <div className='flex items-center mb-4'>
            <Info className='w-5 h-5 mr-2 text-slate-500' />
            <h2 className='text-2xl font-semibold'>About</h2>
          </div>
          <p className='text-gray-700'>{restaurant.description}</p>
        </div>
        {}
        {userData && userPunchCardData ? (
          <div className='bg-white rounded-xl shadow-sm border p-6 row-span-2 flex flex-col'>
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center'>
                <Tag className='w-5 h-5 mr-2 text-blue-500' />
                <h2 className='text-xl font-semibold'>Your Punch Card</h2>
              </div>
              <Link
                href='/profile?tab=punch-cards'
                className='text-sm text-blue-600 hover:underline flex items-center'
              >
                <UserIcon className='w-4 h-4 mr-1' />
                View in Profile
              </Link>
            </div>
            <div className='flex-grow flex items-center justify-center'>
              <PunchCard
                restaurantName={restaurant.name}
                restaurantImage={restaurant.imageUrl}
                restaurantId={restaurant.id}
                currentPunches={userPunchCardData.punches}
                MAX_PUNCH_THRESHOLD={PUNCH_THRESHOLD}
                completed={userPunchCardData.completed}
                lastUpdated={userPunchCardData.updatedAt}
                className='w-full max-w-md'
              />
            </div>
          </div>
        ) : !userData ? (
          <div className='bg-blue-50 border border-blue-200 rounded-xl p-6 h-full flex flex-col justify-between'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>
                Join our rewards program!
              </h3>
              <p className='text-gray-700 mb-4'>
                Sign up to start collecting stamps and earning rewards at this
                restaurant.
              </p>
            </div>
            <div className='flex gap-4'>
              <Link
                href='/sign-up'
                className='inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors'
              >
                Sign Up
              </Link>
              <Link
                href='/sign-in'
                className='inline-block bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition-colors'
              >
                Sign In
              </Link>
            </div>
          </div>
        ) : null}
        {}
        <div className='bg-white rounded-xl shadow-sm border p-6 col-span-full'>
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center'>
              <Tag className='w-5 h-5 mr-2 text-amber-500' />
              <h2 className='text-2xl font-semibold'>Current Deals</h2>
            </div>
          </div>
          {formattedDeals && formattedDeals.length > 0 ? (
            <div className='space-y-4'>
              <DealsList deals={formattedDeals} />
            </div>
          ) : (
            <p className='text-gray-600 py-4'>
              No current deals available at this restaurant.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
````

## File: src/app/admin/restaurants/[id]/page.tsx
````typescript
import Link from 'next/link'
import Image from 'next/image'
import {Suspense} from 'react'
import {auth} from '@clerk/nextjs/server'
import {QRCodeManager} from '../qr-code-manager'
import {getRestaurantById, getPrizesByRestaurantId} from '@/db/models'
import {RestaurantLoading} from '@/features/restaurants/RestaurantLoading'
import {PrizeCard} from '@/features/prizes/prize-card/PrizeCard'
async function RestaurantDetail(params: {id: string}) {
  const {id}: {id: string} = await params
  const restaurant = id ? await getRestaurantById(BigInt(id)) : null
  console.log('🚀 ~ restaurant ~ restaurant:', restaurant)
  if (!restaurant) {
    return null
  }
  console.log('🚀 ~ restaurant ~ restaurant:', restaurant)
  const {userId} = await auth()
  const isAuthenticated = !!userId
  return (
    <div>
      <div className='relative h-64 w-full mb-8 rounded-lg overflow-hidden'>
        <Image
          src={restaurant.imageUrl || '/RWP.jpg'}
          alt={restaurant.name}
          fill
          className='object-cover'
          priority
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-black bg-opacity-30' />
        <div className='absolute bottom-0 left-0 p-6'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            {restaurant.name}
          </h1>
          <p className='text-white text-opacity-90'>{restaurant.address}</p>
        </div>
      </div>
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>About</h2>
        <p className='text-gray-700'>{restaurant.description}</p>
      </div>
      <div className='mb-8'>
        <div className='flex justify-between items-center mb-4'>
          {restaurant.qrCodeUrl ? (
            <div className='mb-6'>
              <p className='text-sm text-gray-600 mb-2'>Current QR code:</p>
              <div className='border border-gray-200 rounded-lg p-4 inline-block'>
                <img
                  src={restaurant.qrCodeUrl}
                  alt='Restaurant QR Code'
                  className='w-48 h-48'
                />
              </div>
            </div>
          ) : isAuthenticated ? (
            <QRCodeManager restaurant={restaurant} />
          ) : (
            <p className='text-gray-600'>No QR code has been generated yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
export default async function RestaurantPage({
  params,
}: {
  params: Promise<{id: string}>
}) {
  console.log('🚀 ~ params:', params)
  const resolvedParams = await params
  const {id} = resolvedParams
  console.log('🚀 ~ id:', id)
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-6'>
        <Link
          href='/restaurants'
          className='text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M19 12H5M12 19l-7-7 7-7' />
          </svg>
          Back to Restaurants
        </Link>
      </div>
      <Suspense fallback={<RestaurantLoading />}>
        <RestaurantDetail id={id.toString()} />
      </Suspense>
    </div>
  )
}
````

## File: src/app/admin/layout.tsx
````typescript
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { auth } from "@clerk/nextjs/server";
import { AdminUI } from "@/components/admin/admin-ui";
export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();
	if (!session?.userId || !isAdmin({ id: session.userId })) {
		redirect("/");
	}
	return <AdminUI>{children}</AdminUI>;
}
````

## File: src/app/page.tsx
````typescript
import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import { auth, type Session } from "@clerk/nextjs/server";
export default async function Home() {
	const session = await auth();
	const userid = session?.userId;
	return (
		<div className="grid grid-rows-[60px_1fr_20px] items-center justify-items-center min-h-screen p-2 gap-16 font-geistSans">
			<nav className="w-full row-start-1 flex justify-between items-center px-8">
				<div className="flex items-center gap-6">
					<Link href="/">
						<Image
							src="/logo.png"
							alt="Restaurant Passport Logo"
							width={100}
							height={100}
						/>
					</Link>
				</div>
				<div className="flex gap-4">{!userid && <SignUpButton />}</div>
			</nav>
			<main className="flex flex-col gap-8 row-start-2 items-center">
				<h2 className="text-3xl font-bold text-center">
					Track Your Restaurant Adventures
				</h2>
				<p className="text-center max-w-lg">
					Keep track of restaurants you've visited, rate your experiences, and
					create your own food passport.
				</p>
				<div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
					<div className="flex gap-4">
						<Link
							href="/sign-up"
							className="rounded-full  border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
						>
							Get Started
						</Link>
						<Link
							href="/deals"
							className="rounded-full bg-[#e0d9d1] relative z-40  border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
						>
							Browse Deals
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
````

## File: src/app/admin/restaurants/page.tsx
````typescript
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { getRestaurants } from "@/db/models";
import type { restaurantSchema } from "@/types/schemas";
import { RestaurantsTable } from "@/components/admin/restaurants-table";
import type { z } from "zod";
type Restaurant = z.infer<typeof restaurantSchema>;
function RestaurantsLoading() {
	return (
		<div className="w-full p-8 bg-white rounded-lg shadow-md animate-pulse">
			<div className="h-8 bg-gray-200 w-1/4 mb-6" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-full mb-2" />
			<div className="h-4 bg-gray-200 w-3/4 mb-6" />
			<div className="flex justify-end">
				<div className="h-8 bg-gray-200 w-24" />
			</div>
		</div>
	);
}
function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
	console.log("🚀 ~ RestaurantCard ~ restaurant:", restaurant);
	return (
		<div className="bg-white rounded-lg shadow-md p-0 overflow-hidden transition-all hover:shadow-lg">
			<div className="relative h-48 w-full">
				<Image
					src={
						restaurant.imageUrl ||
						"https://via.placeholder.com/400x250?text=Restaurant"
					}
					alt={restaurant.name}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="p-4">
				<h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
				<p className="text-gray-600 text-sm mb-2 line-clamp-2">
					{restaurant.description}
				</p>
				<p className="text-gray-500 text-sm mb-4">{restaurant.address}</p>
				<Link
					href={`/admin/restaurants/${restaurant.id.toString()}`}
					className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
				>
					View Details
				</Link>
			</div>
		</div>
	);
}
async function RestaurantsList({ restaurants }: { restaurants: Restaurant[] }) {
	return <RestaurantsTable restaurants={restaurants} />;
}
export default async function RestaurantsPage() {
	const restaurants = await getRestaurants();
	return (
		<>
			<div className="w-full mx-auto px-4 py-8 bg-sidebar rounded-xl shadow-sm mb-4">
				<div className="flex justify-start items-center mb-8 flex-col md:flex-row flex-wrap">
					<h1 className="text-3xl font-bold text-left md:text-center mb-4 md:mb-0">
						Restaurants
					</h1>
					<div className="w-full mt-2 flex space-x-4 align-middle items-center justify-start">
						<Link
							href="/admin/restaurants/new"
							className="bg-[#ebe6e7] px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors"
						>
							Add Restaurant
						</Link>
						<Link
							href="/admin/restaurants/bulk-qr"
							className="bg-[#e6ebe7] px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors flex items-center gap-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-qr-code"
								aria-hidden="true"
							>
								<rect width="5" height="5" x="3" y="3" rx="1" />
								<rect width="5" height="5" x="16" y="3" rx="1" />
								<rect width="5" height="5" x="3" y="16" rx="1" />
								<path d="M21 16h-3a2 2 0 0 0-2 2v3" />
								<path d="M21 21v.01" />
								<path d="M12 7v3a2 2 0 0 1-2 2H7" />
								<path d="M3 12h.01" />
								<path d="M12 3h.01" />
								<path d="M12 16v.01" />
								<path d="M16 12h1" />
								<path d="M21 12v.01" />
								<path d="M12 21v-1" />
							</svg>
							Bulk QR Codes
						</Link>
						<Link
							href="/admin"
							className="border border-gray-400 dark:border-gray-600 px-4 py-2 rounded-md text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
						>
							Back to Dashboard
						</Link>
					</div>
				</div>
				<div className="mb-8">
					<p className="text-gray-600">
						Manage your partner restaurants. Edit details directly in the table
						below or click on View Details for more options.
					</p>
				</div>
			</div>
			{restaurants.length === 0 ? (
				<div className="text-center py-12">
					<h3 className="text-xl font-medium mb-4">No restaurants found</h3>
					<p className="text-gray-600 mb-6">
						There are no restaurants in the database yet.
					</p>
				</div>
			) : (
				<Suspense fallback={<RestaurantsLoading />}>
					<RestaurantsTable restaurants={restaurants} />
				</Suspense>
			)}
		</>
	);
}
````

## File: src/app/users/[id]/profile/page.tsx
````typescript
import {UserButton} from '@clerk/nextjs'
import {getUserByClerkId} from '@/db/models/users/users'
import {auth} from '@clerk/nextjs/server'
import {UserPunchCards} from '@/features/users/UserPunchCards'
import {BentoGrid} from '@/components/kokonutui/bento-grid'
import {usePunchCardSubscription} from '@/hooks/use-punch-card-subscription'
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}
export default async function ProfilePage() {
  const {userId} = await auth()
  const user = userId ? await getUserByClerkId(userId) : null
  console.log('🚀 ~ ProfilePage ~ user:', user)
  if (!user) return <div>Not logged in</div>
  return (
    <div className='p-6'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-2xl font-bold'>My Profile</h1>
        <UserButton />
      </div>
      <div className='bg-white shadow-sm rounded-lg p-6 mb-6'>
        <div className='flex items-center space-x-4'>
          <div className='font-medium'>
            <div>{user.name}</div>
            <div className='text-sm text-gray-500'>{user.email}</div>
          </div>
        </div>
      </div>
      {}
      <UserPunchCards user={user} initialPunchCards={user?.punchCards || []} />
      {}
      {}
    </div>
  )
}
````

## File: src/components/admin/Sidebar.tsx
````typescript
'use client'
import React, {useEffect, useRef, useState} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {SignOutButton, UserButton, UserProfile, useUser} from '@clerk/nextjs'
import {useSidebar} from './SidebarContext'
import Image from 'next/image'
import {
  LayoutDashboard,
  Users,
  Store,
  Settings,
  Gift,
  Trophy,
  Globe,
  ChevronDown,
  ChevronRight,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
const menuItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: 'Users',
    href: '/admin/users',
    icon: <Users size={20} />,
  },
  {
    title: 'Restaurants',
    href: '/admin/restaurants',
    icon: <Store size={20} />,
    submenu: [
      {
        title: 'All Restaurants',
        href: '/admin/restaurants',
      },
      {
        title: 'Add Restaurant',
        href: '/admin/restaurants/new',
      },
    ],
  },
  {
    title: 'Deals',
    href: '/admin/deals',
    icon: <Gift size={20} />,
    submenu: [
      {
        title: 'All Deals',
        href: '/admin/deals',
      },
      {
        title: 'Add Deal',
        href: '/admin/deals/new',
      },
    ],
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: <Settings size={20} />,
  },
]
const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T | undefined>(undefined)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}
export function AdminSidebar() {
  const {user} = useUser()
  const pathname = usePathname()
  const {collapsed, toggleCollapse} = useSidebar()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }
  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin'
    }
    return pathname.startsWith(href)
  }
  const isSubmenuActive = (href: string) => {
    return pathname === href
  }
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen)
  }
  const prevPathname = usePrevious(pathname)
  useEffect(() => {
    if (mobileOpen && prevPathname !== pathname) {
      setMobileOpen(false)
    }
  }, [pathname, prevPathname, mobileOpen])
  return (
    <>
      {}
      <button
        type='button'
        className='md:hidden fixed z-50 top-4 right-4 p-2 rounded-md'
        onClick={toggleMobileMenu}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {}
      {mobileOpen && (
        <div
          className='md:hidden fixed inset-0 bg-black/80  z-50'
          onClick={() => setMobileOpen(false)}
        />
      )}
      {}
      <aside
        className={`
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          ${collapsed ? 'md:w-20' : 'md:w-64'}
          fixed top-0 left-0 h-full text-white transition-all duration-300 ease-in-out z-50
          flex flex-col border-r border-[#e5e5e5b3]
        `}
      >
        {}
        <div className='bg-white text-gray-600 flex w-full justify-start items-center p-4'>
          {
}
          {
}
          <button
            className='hidden md:block text-gray-600 hover:text-white flex'
            onClick={toggleCollapse}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        {}
        {!collapsed && (
          <div className='p-4 border-b border-gray-700 bg-white'>
            <div className='flex items-center space-x-3'>
              <UserButton />
            </div>
          </div>
        )}
        {}
        <nav className='flex-1 overflow-y-auto py-4 bg-white text-gray-700 border-r border-[#e5e5e5b3]'>
          <ul className='space-y-1 px-3'>
            {menuItems.map((item) => (
              <li key={item.title}>
                {item.submenu ? (
                  <div>
                    <button
                      className={`
                        w-full flex items-center justify-between p-3 rounded-md
                        ${
                          isActive(item.href)
                            ? 'border-b border-[#ebe6e7]'
                            : 'border-b-0'
                        }
                        transition-colors duration-200
                      `}
                      onClick={() => toggleSubmenu(item.title)}
                    >
                      <div className='flex items-center'>
                        <span className='mr-3'>{item.icon}</span>
                        {!collapsed && <span>{item.title}</span>}
                      </div>
                      {!collapsed && (
                        <span>
                          {openSubmenu === item.title ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </span>
                      )}
                    </button>
                    {}
                    {openSubmenu === item.title && !collapsed && (
                      <ul className='mt-1 pl-10 space-y-1'>
                        {item.submenu.map((subitem) => (
                          <li key={subitem.title}>
                            <Link
                              href={subitem.href}
                              className={`
                                block p-2 rounded-md text-sm
                                ${
                                  isSubmenuActive(subitem.href)
                                    ? 'border-b border-[#818cf8]'
                                    : 'border-b-0'
                                }
                                transition-colors duration-200
                              `}
                            >
                              {subitem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`
                      flex items-center p-3 rounded-md
                      ${
                        isActive(item.href)
                          ? 'border-b border-[#818cf8]'
                          : 'border-b-0'
                      }
                      transition-colors duration-200
                    `}
                  >
                    <span className='mr-3'>{item.icon}</span>
                    {!collapsed && <span>{item.title}</span>}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <div className='flex items-center p-3 rounded-md'>
                <SignOutButton />
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
````

## File: src/features/users/UserPunchCards.tsx
````typescript
'use client'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Spinner} from '@/components/ui/spinner'
import Image from 'next/image'
import Link from 'next/link'
import {AnimatePresence, motion} from 'framer-motion'
import type {User} from '@/types/db'
import {UserPunchCard} from '@/features/users/UserPunchCard'
import {
  usePunchCardSubscription,
  type PunchCardWithRestaurant,
} from '@/hooks/use-punch-card-subscription'
import {useEffect, useState} from 'react'
import {useSearchParams} from 'next/navigation'
import {cn} from '@/lib/utils'
import {type Badge, Award} from 'lucide-react'
import React from 'react'
import {LotteryStatus} from '@/features/users/lottery-status'
import {SharePunchMenu} from '@/features/users/share-punch-menu'
import {Passport} from '@/features/users/passport'
interface UserPunchCardsProps {
  user: User | Record<string, unknown>
  initialPunchCards?: PunchCardWithRestaurant[]
}
export function UserPunchCards({
  user,
  initialPunchCards = [],
}: UserPunchCardsProps) {
  const searchParams = useSearchParams()
  const highlightId = searchParams.get('highlight')
  const [highlightedCardId, setHighlightedCardId] = useState<string | null>(
    null
  )
  const [useFallbackData, setUseFallbackData] = useState(false)
  const userId = (() => {
    try {
      if (user && typeof user === 'object' && 'id' in user) {
        const id = user.id
        if (typeof id === 'bigint') return id
        if (typeof id === 'number' || typeof id === 'string') {
          return BigInt(id.toString())
        }
      }
      setUseFallbackData(true)
      return undefined
    } catch (e) {
      setUseFallbackData(true)
      return undefined
    }
  })()
  const {punchCards, isLoading, error} = !userId
    ? {punchCards: [], isLoading: false, error: null}
    : usePunchCardSubscription(userId)
  console.log('🚀 ~ punchCards:', punchCards)
  const [displayPunchCards, setDisplayPunchCards] = useState(
    useFallbackData || punchCards.length === 0 ? initialPunchCards : punchCards
  )
  useEffect(() => {
    if (highlightId && displayPunchCards.length > 0) {
      const matchingCard = displayPunchCards.find(
        (card) => String(card.restaurantId) === highlightId
      )
      if (matchingCard) {
        setHighlightedCardId(String(matchingCard.id))
        setTimeout(() => {
          const element = document.getElementById(
            `punch-card-${matchingCard.id}`
          )
          if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'center'})
          }
        }, 500)
        setTimeout(() => {
          setHighlightedCardId(null)
        }, 5000)
      }
    }
  }, [highlightId, displayPunchCards])
  if (isLoading && initialPunchCards.length === 0) {
    return (
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Your Punch Cards</CardTitle>
        </CardHeader>
        <CardContent className='flex justify-center items-center py-8'>
          <Spinner size='lg' />
        </CardContent>
      </Card>
    )
  }
  if (error && displayPunchCards.length === 0) {
    return (
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Your Punch Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground'>
            Something went wrong loading your punch cards. Please try again
            later.
          </p>
        </CardContent>
      </Card>
    )
  }
  if (displayPunchCards.length === 0) {
    return (
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Your Punch Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground'>
            You don't have any punch cards yet. Visit a restaurant to get
            started!
          </p>
        </CardContent>
      </Card>
    )
  }
  return (
    <div className=''>
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle>Your Passport</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              className={cn(
                'relative overflow-hidden rounded-xl bg-card shadow-lg',
                'w-full flex flex-col'
              )}
              style={{perspective: 1000}}
            >
              <div className='rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors p-4'>
                <div className='flex items-center gap-3 mt-2'>
                  <div className='flex-grow space-y-1'>
                    <div className='text-xs text-muted-foreground'>
                      {}
                    </div>
                    {}
                    <div className='flex gap-1'>
                      <Passport punches={displayPunchCards} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
````

## File: src/db/models/restaurants/restaurants.ts
````typescript
"use server";
import { eq } from "drizzle-orm";
import { db } from "../../db";
import { restaurants, prizes, punchCards, restaurantDeals } from "../../schema";
import { getPrizesByRestaurantId } from "@/db/models/prizes";
export const getRestaurants = async () => {
	const restaurantsList = await db.query.restaurants.findMany({
		with: {
			deals: true,
			prizes: true,
			punchCards: true,
		},
	});
	return restaurantsList.map((restaurant) => ({
		...restaurant,
		punchCardCount: restaurant?.punchCards?.length || 0,
		dealCount: restaurant?.deals?.length || 0,
	}));
};
export const getPaginatedRestaurants = async (page = 1, pageSize = 10) => {
	const offset = (page - 1) * pageSize;
	const totalCount = await db.query.restaurants.count();
	const restaurantsList = await db.query.restaurants.findMany({
		with: {
			deals: true,
			prizes: true,
			punchCards: true,
		},
		limit: pageSize,
		offset: offset,
	});
	const restaurants = restaurantsList.map((restaurant) => ({
		...restaurant,
		punchCardCount: restaurant?.punchCards?.length || 0,
		dealCount: restaurant?.deals?.length || 0,
	}));
	return {
		restaurants,
		pagination: {
			total: totalCount,
			pageSize,
			currentPage: page,
			totalPages: Math.ceil(totalCount / pageSize),
			hasMore: offset + pageSize < totalCount,
		},
	};
};
export const getDeals = async () => {
	return await db.query.restaurantDeals.findMany({
		with: {
			restaurant: true,
		},
	});
};
export const getActiveDeals = async () => {
	return await db.query.restaurantDeals.findMany({
		where: eq(restaurantDeals.active, true),
	});
};
export const getRestaurantById = async (id: bigint) => {
	return await db
		.select()
		.from(restaurants)
		.where(eq(restaurants.id, id))
		.limit(1)
		.then((res) => res[0]);
};
export const getRestaurantByIdWithPrizesAndDeals = async (id: bigint) => {
	const restaurant = await db.query.restaurants.findFirst({
		where: eq(restaurants.id, id),
		with: {
			prizes: true,
			deals: true,
		},
	});
	if (!restaurant) {
		return null;
	}
	return restaurant;
};
export const getRestaurantByIdWithAll = async (id: bigint) => {
	return await db.query.restaurants.findFirst({
		where: eq(restaurants.id, id),
		with: {
			prizes: true,
			deals: true,
			punchCards: true,
		},
	});
};
export const createRestaurant = async (data: {
	name: string;
	description: string;
	imageUrl: string;
	address: string;
	qrCodeUrl?: string;
}) => {
	return await db.insert(restaurants).values(data).returning();
};
export const updateRestaurant = async (
	id: bigint,
	data: Partial<{
		name: string;
		description: string;
		imageUrl: string;
		address: string;
		qrCodeUrl: string;
	}>,
) => {
	return await db
		.update(restaurants)
		.set(data)
		.where(eq(restaurants.id, id))
		.returning();
};
export const deleteRestaurant = async (id: bigint) => {
	return await db.delete(restaurants).where(eq(restaurants.id, id)).returning();
};
export const createRestaurantDeal = async (data: {
	restaurantId: bigint;
	title: string;
	content: string;
	active: boolean;
}) => {
	return await db.insert(restaurantDeals).values(data).returning();
};
export const updateRestaurantDeal = async (
	id: bigint,
	data: Partial<{
		restaurantId: bigint;
		title: string;
		content: string;
		active: boolean;
	}>,
) => {
	return await db
		.update(restaurantDeals)
		.set(data)
		.where(eq(restaurantDeals.id, id))
		.returning();
};
export const deleteRestaurantDeal = async (id: bigint) => {
	return await db
		.delete(restaurantDeals)
		.where(eq(restaurantDeals.id, id))
		.returning();
};
````

## File: src/app/layout.tsx
````typescript
import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import {ClerkProvider} from '@clerk/nextjs'
import {LocationProvider} from '@/context/location-context'
import {Analytics} from '@vercel/analytics/react'
import {Nav} from '@/components/nav/nav'
import {Toaster} from '@/components/ui/sonner'
import {UserProvider} from '@/context/user-context'
import './globals.css'
import {StyleWrapper} from '@/context/style-wrapper'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Experience Maple Grove Restaurant Passport',
  description: 'Track your restaurant visits and experiences',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <LocationProvider>
        <UserProvider>
          <html lang='en'>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased relative h-screen overflow-scroll bg-[#faf9f6] overflow-x-hidden`}
            >
              <StyleWrapper>{children}</StyleWrapper>
              <Nav />
              <Toaster />
              {}
            </body>
          </html>
        </UserProvider>
      </LocationProvider>
    </ClerkProvider>
  )
}
````

## File: src/components/admin/restaurants-table.tsx
````typescript
'use client'
import * as React from 'react'
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type Row,
  type Column,
  type Table as TanstackTable,
  type SortingState,
} from '@tanstack/react-table'
import {
  Check,
  X,
  Edit,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Building,
  MapPin,
  QrCode,
  MoreHorizontal,
  Trash2,
  ExternalLink,
  Save,
  Download,
  FileSpreadsheet,
  Upload,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import {Checkbox} from '@/components/ui/checkbox'
import type {z} from 'zod'
import type {restaurantSchema} from '@/types/schemas'
import type {Restaurant} from '@/types/db'
import {QRCodeManager} from '@/app/admin/restaurants/qr-code-manager'
import {useRouter} from 'next/navigation'
import {
  updateRestaurantAction,
  deleteRestaurantAction,
  importRestaurantsFromCSV,
} from '@/actions/restaurants'
import {toast} from 'sonner'
import {useRestaurantSearch} from '@/hooks/useRestaurantSearch'
import {AdminRestaurantSearchBar} from '@/features/restaurants/AdminRestaurantSearchBar'
import {RestaurantQuickView} from './restaurant-quick-view'
import {useHandleBulkQRCode} from '@/hooks/use-handle-bulk-qr-code'
import {Progress} from '@/components/ui/progress'
import {exportToCSV} from '@/lib/csv'
import {CSVUpload} from '@/components/admin/csv-upload'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Badge} from '@/components/ui/badge'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {cn} from '@/lib/utils'
interface ColumnMeta {
  editable?: boolean
}
interface TableMeta {
  updateData: (rowIndex: number, columnId: string, value: unknown) => void
}
type RestaurantData = z.infer<typeof restaurantSchema>
type ExtendedRestaurant = Restaurant & {
  punchCardCount?: number
  deals?: {id: string; title: string; isActive: boolean}[]
}
type EditableCellProps = {
  getValue: () => unknown
  row: Row<RestaurantData>
  column: Column<RestaurantData, unknown>
  table: TanstackTable<RestaurantData>
}
type RowSelectionState = Record<string, boolean>
const getSortingIcon = (state: 'asc' | 'desc' | false) => {
  if (state === 'asc')
    return <ChevronLeft className='text-gray-500 h-4 w-4 rotate-90' />
  if (state === 'desc')
    return <ChevronLeft className='text-gray-500 h-4 w-4 -rotate-90' />
  return (
    <div className='flex flex-col h-4'>
      <ChevronLeft className='h-2 w-2 rotate-90' />
      <ChevronLeft className='h-2 w-2 -rotate-90' />
    </div>
  )
}
const EditableCell = ({getValue, row, column, table}: EditableCellProps) => {
  const initialValue = getValue()
  const columnId = column.id
  const [value, setValue] = React.useState(initialValue)
  const [editing, setEditing] = React.useState(false)
  React.useEffect(() => {
    setValue(getValue())
  }, [getValue])
  const onBlur = () => {
    ;(table.options.meta as TableMeta).updateData(row.index, columnId, value)
    setEditing(false)
  }
  const onEditClick = () => {
    setEditing(true)
  }
  const onCancelClick = () => {
    setValue(initialValue)
    setEditing(false)
  }
  const onSaveClick = () => {
    ;(table.options.meta as TableMeta).updateData(row.index, columnId, value)
    setEditing(false)
  }
  if (
    columnId === 'id' ||
    columnId === 'qrCodeUrl' ||
    (column.columnDef.meta as ColumnMeta)?.editable === false
  ) {
    return (
      <div
        className='py-2 text-sm truncate overflow-hidden'
        title={value?.toString()}
      >
        {value?.toString()}
      </div>
    )
  }
  const getColumnIcon = () => {
    switch (columnId) {
      case 'name':
        return <Building className='h-4 w-4 text-sidebar-foreground/50 mr-2' />
      case 'description':
        return <Building className='h-4 w-4 text-sidebar-foreground/50 mr-2' />
      case 'address':
        return <MapPin className='h-4 w-4 text-sidebar-foreground/50 mr-2' />
      case 'imageUrl':
        return <ImageIcon className='h-4 w-4 text-sidebar-foreground/50 mr-2' />
      default:
        return null
    }
  }
  return editing ? (
    <div className='flex items-center space-x-2'>
      <Input
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        autoFocus
        className='h-8 w-full text-sm bg-background border-sidebar-border focus-visible:ring-sidebar-ring'
      />
      <div className='flex space-x-1'>
        <Button
          onClick={onSaveClick}
          size='sm'
          variant='ghost'
          className='h-8 w-8 p-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
        >
          <Check className='h-4 w-4' />
        </Button>
        <Button
          onClick={onCancelClick}
          size='sm'
          variant='ghost'
          className='h-8 w-8 p-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
        >
          <X className='h-4 w-4' />
        </Button>
      </div>
    </div>
  ) : (
    <div className='flex items-center justify-between space-x-2 group/cell'>
      <div
        className='flex items-center truncate py-2 text-sm w-full'
        title={value?.toString()}
      >
        {getColumnIcon()}
        <span className='truncate hover:text-clip'>{value?.toString()}</span>
      </div>
      <Button
        onClick={onEditClick}
        size='sm'
        variant='ghost'
        className='h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
      >
        <Edit className='h-4 w-4' />
      </Button>
    </div>
  )
}
export function RestaurantsTable({
  restaurants: initialData,
}: {
  restaurants: RestaurantData[]
}) {
  const [data, setData] = React.useState<RestaurantData[]>(initialData)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
  const [pending, setPending] = React.useState<Record<number, boolean>>({})
  const [restaurantToDelete, setRestaurantToDelete] =
    React.useState<RestaurantData | null>(null)
  const router = useRouter()
  const [isMobileView, setIsMobileView] = React.useState(false)
  const [isExporting, setIsExporting] = React.useState(false)
  const [isImporting, setIsImporting] = React.useState(false)
  const selectedCount = Object.keys(rowSelection).length
  const {
    generating: bulkGenerating,
    saving: bulkSaving,
    success: bulkSuccess,
    error: bulkError,
    progress = 0,
    results = [],
    handleGenerateAll = () => {},
    handleSaveAll = () => {},
    handleDownloadAll = () => {},
    handleReset = () => {},
  } = useHandleBulkQRCode()
  React.useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 768)
    }
    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])
  const {
    filteredRestaurants,
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    isSearching,
  } = useRestaurantSearch({
    restaurants: data as unknown as Restaurant[],
    initialSortOption: 'name-asc',
  })
  React.useEffect(() => {
    setData(initialData)
  }, [initialData])
  const handleToggleRow = (rowId: string, selected: boolean) => {
    setRowSelection((prev) => {
      const newSelection = {...prev}
      if (selected) {
        newSelection[rowId] = true
      } else {
        delete newSelection[rowId]
      }
      return newSelection
    })
  }
  const handleToggleAllRows = (selected: boolean) => {
    if (selected) {
      const pageRows = table.getRowModel().rows
      const newSelection = pageRows.reduce<RowSelectionState>((acc, row) => {
        acc[row.id] = true
        return acc
      }, {})
      setRowSelection(newSelection)
    } else {
      setRowSelection({})
    }
  }
  const columns: ColumnDef<RestaurantData>[] = [
    {
      id: 'select',
      size: 60,
      header: ({table}) => (
        <div className='flex justify-center items-center'>
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => {
              const isChecked = value === true
              handleToggleAllRows(isChecked)
              table.toggleAllPageRowsSelected(isChecked)
            }}
            aria-label='Select all rows'
            className='border-gray-400 dark:border-gray-600'
          />
        </div>
      ),
      cell: ({row}) => (
        <div className='flex justify-center items-center'>
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => {
              const isChecked = value === true
              handleToggleRow(row.id, isChecked)
              row.toggleSelected(isChecked)
            }}
            aria-label='Select row'
            className='border-gray-400 dark:border-gray-600'
          />
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: 'id',
      accessorKey: 'id',
      header: 'ID',
      size: 80,
      cell: ({row}) => {
        const restaurant = row.original as Restaurant
        return (
          <div className='text-sm truncate'>{restaurant.id.toString()}</div>
        )
      },
    },
    {
      accessorKey: 'name',
      size: 200,
      header: ({column}) => (
        <div className='flex items-center gap-0.5'>
          Name
          <Button
            size='sm'
            variant='ghost'
            className='h-8 w-8 ml-1 p-0'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {getSortingIcon(column.getIsSorted())}
          </Button>
        </div>
      ),
      cell: EditableCell,
    },
    {
      accessorKey: 'qrCodeUrl',
      header: 'QR Code',
      cell: ({row}) => {
        const restaurant = row.original as Restaurant
        return (
          <div className='flex items-center'>
            <QrCode className='h-4 w-4 text-sidebar-foreground/50 mr-2' />
            <QRCodeManager restaurant={restaurant} variant='table' />
          </div>
        )
      },
    },
    {
      accessorKey: 'punchCardCount',
      size: 120,
      header: ({column}) => (
        <div className='flex items-center gap-0.5'>
          Punch Cards
          <Button
            size='sm'
            variant='ghost'
            className='h-8 w-8 ml-1 p-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {getSortingIcon(column.getIsSorted())}
          </Button>
        </div>
      ),
      cell: ({row}) => {
        const restaurant = row.original as Restaurant & {
          punchCardCount?: number
        }
        return (
          <div className='font-medium text-sm text-center'>
            {restaurant.punchCardCount || 0}
          </div>
        )
      },
    },
    {
      accessorKey: 'dealCount',
      size: 100,
      header: ({column}) => (
        <div className='flex items-center gap-0.5'>
          Deals
          <Button
            size='sm'
            variant='ghost'
            className='h-8 w-8 ml-1 p-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {getSortingIcon(column.getIsSorted())}
          </Button>
        </div>
      ),
      accessorFn: (row) => {
        const restaurant = row as ExtendedRestaurant
        return restaurant.deals?.length || 0
      },
      cell: ({row}) => {
        const restaurant = row.original as ExtendedRestaurant
        return (
          <div className='font-medium text-sm text-center'>
            {restaurant.deals?.length || 0}
          </div>
        )
      },
    },
    {
      id: 'quickView',
      header: 'Quick View',
      size: 100,
      cell: ({row}) => {
        const restaurant = row.original
        return (
          <div className='flex justify-center'>
            <RestaurantQuickView restaurantId={restaurant.id} />
          </div>
        )
      },
      meta: {editable: false} as ColumnMeta,
    },
    {
      id: 'actions',
      header: '',
      cell: ({row}) => {
        const restaurant = row.original
        return (
          <div className='flex justify-end'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='h-8 w-8 p-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                >
                  <MoreHorizontal className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align='end'
                className='bg-background border-sidebar-border'
              >
                <DropdownMenuItem
                  onClick={() => handleView(restaurant.id.toString())}
                  className='hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                >
                  View Details
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setRestaurantToDelete(restaurant)}
                  className='text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20'
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      },
    },
  ]
  const handleView = (id: string) => {
    router.push(`/admin/restaurants/${id}`)
  }
  const handleSave = async (rowIndex: number, restaurant: RestaurantData) => {
    try {
      setPending({...pending, [rowIndex]: true})
      const {id, ...updateData} = restaurant
      const result = await updateRestaurantAction(id, updateData)
      if (result.success) {
        toast.success(result.message)
      } else {
        toast.error(result.error?._form?.[0] || 'Failed to update restaurant')
        setData(initialData)
      }
    } catch (error) {
      toast.error('An error occurred while updating the restaurant')
      console.error(error)
    } finally {
      setPending({...pending, [rowIndex]: false})
    }
  }
  const handleDelete = async () => {
    if (!restaurantToDelete) return
    try {
      const result = await deleteRestaurantAction(restaurantToDelete.id)
      if (result.success) {
        toast.success(result.message)
        setData(data.filter((r) => r.id !== restaurantToDelete.id))
      } else {
        toast.error(result.error?._form?.[0] || 'Failed to delete restaurant')
      }
    } catch (error) {
      toast.error('An error occurred while deleting the restaurant')
      console.error(error)
    } finally {
      setRestaurantToDelete(null)
    }
  }
  const table = useReactTable({
    data: filteredRestaurants as unknown as RestaurantData[],
    columns,
    state: {
      sorting,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        const restaurantId = filteredRestaurants[rowIndex].id
        const dataIndex = data.findIndex((r) => r.id === restaurantId)
        if (dataIndex >= 0) {
          const newData = [...data]
          newData[dataIndex] = {
            ...newData[dataIndex],
            [columnId]: value,
          }
          setData(newData)
          handleSave(dataIndex, newData[dataIndex])
        }
      },
    } as TableMeta,
  })
  const handleBulkGenerate = () => {
    const selectedRows = table.getSelectedRowModel().rows
    const selectedRestaurants = selectedRows.map(
      (row) => row.original
    ) as Restaurant[]
    if (selectedRestaurants.length === 0) {
      toast.error('Please select at least one restaurant')
      return
    }
    handleGenerateAll(selectedRestaurants)
  }
  const handleExportCSV = React.useCallback(
    (exportAll = false) => {
      try {
        setIsExporting(true)
        const restaurantsToExport = exportAll
          ? filteredRestaurants
          : table.getSelectedRowModel().rows.map((row) => row.original)
        const exportData = restaurantsToExport.map((restaurant) => ({
          id: restaurant.id,
          name: restaurant.name,
          address: restaurant.address,
          description: restaurant.description || '',
          imageUrl: restaurant.imageUrl || '',
        }))
        // Export to CSV with all columns from our clean data structure
        exportToCSV(exportData, 'restaurants-export')
        toast.success(
          `Successfully exported ${restaurantsToExport.length} restaurants to CSV`
        )
      } catch (error) {
        console.error('Error exporting CSV:', error)
        toast.error('Failed to export CSV. Please try again.')
      } finally {
        setIsExporting(false)
      }
    },
    [filteredRestaurants, table]
  )
  const handleImportCSV = React.useCallback(
    async (data: Record<string, unknown>[]) => {
      try {
        setIsImporting(true)
        const result = await importRestaurantsFromCSV(data)
        if (result.success) {
          router.refresh()
        } else {
          toast.error(result.message)
          if (result.error?._form) {
            throw new Error(result.error._form[0])
          }
        }
      } catch (error) {
        console.error('CSV import error:', error)
        throw error
      } finally {
        setIsImporting(false)
      }
    },
    [router]
  )
  return (
    <div className='space-y-4 p-4 rounded-xl mb-4 shadow-sm bg-white'>
      <AdminRestaurantSearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />
      {}
      <div className='flex flex-col space-y-4'>
        {}
        <div
          className={cn(
            'bg-background border border-primary/20 rounded-lg p-4 shadow-sm transition-opacity',
            selectedCount > 0
              ? 'opacity-100'
              : 'opacity-0 h-0 p-0 overflow-hidden'
          )}
        >
          <div className='flex flex-col sm:flex-row justify-between gap-4'>
            <div className='flex items-center'>
              <span className='text-sm font-medium'>
                {selectedCount} restaurant{selectedCount !== 1 ? 's' : ''}{' '}
                selected
              </span>
            </div>
            <div className='flex flex-wrap gap-2 ml-auto'>
              {}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size='sm'
                    variant='outline'
                    disabled={isExporting}
                    className='h-8 border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  >
                    <FileSpreadsheet className='h-3.5 w-3.5 mr-1.5' />
                    {isExporting ? 'Exporting...' : 'Export Options'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align='end'
                  className='bg-background border-sidebar-border'
                >
                  {selectedCount > 0 ? (
                    <DropdownMenuItem
                      onClick={() => handleExportCSV(false)}
                      className='hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    >
                      Export Selected ({selectedCount})
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem
                      onClick={() => handleExportCSV(true)}
                      disabled={filteredRestaurants.length === 0}
                      className='hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    >
                      Export All ({filteredRestaurants.length})
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              {}
              <Button
                variant='outline'
                onClick={handleBulkGenerate}
                disabled={bulkGenerating || selectedCount === 0}
                className='h-8 border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              >
                <QrCode className='h-3.5 w-3.5 mr-1.5' />
                Generate QR Codes
              </Button>
              {}
              {bulkGenerating && !bulkSuccess && (
                <Button
                  size='sm'
                  onClick={handleSaveAll}
                  disabled={!results.length || bulkSaving}
                  className='h-8 bg-background border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                >
                  <Save className='h-3.5 w-3.5 mr-1.5' />
                  {bulkSaving ? 'Saving...' : 'Save QR Codes'}
                </Button>
              )}
              {bulkSuccess && (
                <>
                  <Button
                    size='sm'
                    onClick={handleDownloadAll}
                    variant='outline'
                    className='h-8 bg-background border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  >
                    <Download className='h-3.5 w-3.5 mr-1.5' />
                    Download All
                  </Button>
                  <Button
                    size='sm'
                    variant='ghost'
                    onClick={handleReset}
                    className='h-8'
                  >
                    Reset
                  </Button>
                </>
              )}
            </div>
          </div>
          {}
          {bulkGenerating && progress > 0 && (
            <div className='mt-4 space-y-2'>
              <div className='flex justify-between text-sm'>
                <span>Generating QR codes...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className='h-2' />
            </div>
          )}
          {}
          {bulkError && (
            <div className='mt-4 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-md text-sm'>
              {bulkError}
            </div>
          )}
          {bulkSuccess && (
            <div className='mt-4 p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 rounded-md text-sm'>
              QR codes have been saved successfully for{' '}
              {results.filter((r) => r.success).length} restaurants!
            </div>
          )}
        </div>
      </div>
      {}
      <div className={cn(isMobileView ? 'block' : 'hidden')}>
        {filteredRestaurants.length > 0 ? (
          <div className='space-y-4'>
            {filteredRestaurants.map((restaurant, index) => {
              const rowId = String(index)
              const isSelected = rowSelection[rowId] === true
              return (
                <div
                  key={restaurant.id.toString()}
                  className={cn(
                    'bg-background rounded-lg border p-4 shadow-sm transition-colors',
                    isSelected
                      ? 'border-primary bg-primary/5'
                      : 'border-sidebar-border'
                  )}
                >
                  <div className='flex justify-between items-start mb-3'>
                    <div className='flex items-center gap-2'>
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={(value) => {
                          handleToggleRow(rowId, !!value)
                          const newRowSelection = {...rowSelection}
                          if (value === true) {
                            newRowSelection[rowId] = true
                          } else {
                            delete newRowSelection[rowId]
                          }
                          setRowSelection(newRowSelection)
                        }}
                        aria-label={`Select ${restaurant.name}`}
                        className='border-gray-400 dark:border-gray-600'
                      />
                      <h3 className='font-medium text-base'>
                        {restaurant.name}
                      </h3>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='h-8 w-8 p-0'>
                          <MoreHorizontal className='h-4 w-4' />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align='end'
                        className='bg-background border-sidebar-border'
                      >
                        <DropdownMenuItem
                          onClick={() => handleView(restaurant.id.toString())}
                          className='hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                        >
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            setRestaurantToDelete(restaurant as RestaurantData)
                          }
                          className='text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20'
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  {}
                  <div className='space-y-3'>
                    {}
                    {restaurant.imageUrl && (
                      <div className='w-full h-32 rounded-lg overflow-hidden'>
                        <img
                          src={restaurant.imageUrl}
                          alt={restaurant.name}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    )}
                    {}
                    <div className='flex flex-wrap gap-2'>
                      {}
                      <div className='text-xs bg-sidebar-accent/30 px-2 py-1 rounded-md flex items-center'>
                        <QrCode className='h-3 w-3 mr-1' />
                        <QRCodeManager
                          restaurant={restaurant as Restaurant}
                          variant='table'
                        />
                      </div>
                      {}
                      <div className='text-xs bg-sidebar-accent/30 px-2 py-1 rounded-md'>
                        Punch Cards:{' '}
                        {(restaurant as unknown as ExtendedRestaurant)
                          .punchCardCount || 0}
                      </div>
                      {}
                      <div className='text-xs bg-sidebar-accent/30 px-2 py-1 rounded-md'>
                        Deals:{' '}
                        {(restaurant as unknown as ExtendedRestaurant).deals
                          ?.length || 0}
                      </div>
                    </div>
                    {}
                    <div className='flex justify-end pt-3 border-t border-sidebar-border'>
                      <RestaurantQuickView restaurantId={restaurant.id} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className='bg-background rounded-lg border border-sidebar-border p-8 text-center'>
            <Building className='h-10 w-10 text-sidebar-foreground/30 mx-auto mb-2' />
            {isSearching ? (
              <p>No restaurants found matching your search</p>
            ) : (
              <p>No restaurants available</p>
            )}
          </div>
        )}
      </div>
      {}
      <div
        className={cn(
          'rounded-md border border-sidebar-border shadow-sm overflow-hidden',
          isMobileView ? 'hidden' : 'block'
        )}
      >
        <div className='w-full overflow-x-auto'>
          <Table className='w-full'>
            <TableHeader className='bg-sidebar/50 sticky top-0 z-10'>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className='border-b border-sidebar-border'
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className='text-sidebar-foreground px-4 py-3 h-14'
                      style={{
                        width:
                          header.column.getSize() !== 150
                            ? header.column.getSize()
                            : undefined,
                        minWidth:
                          header.column.getSize() !== 150
                            ? header.column.getSize()
                            : 100,
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className='border-b border-sidebar-border hover:bg-sidebar/10'
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className='px-4 py-3 align-middle'
                        style={{
                          maxWidth:
                            cell.column.id === 'actions' ? '80px' : '300px',
                          overflow: 'hidden',
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className='h-24 text-center py-8'
                  >
                    <div className='flex flex-col items-center justify-center text-sidebar-foreground/70'>
                      <Building className='h-10 w-10 text-sidebar-foreground/30 mb-2' />
                      {isSearching ? (
                        <p>No restaurants found matching your search</p>
                      ) : (
                        <p>No restaurants available</p>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      {}
      <div className='flex items-center justify-between py-4 bg-white rounded-md px-4 border border-sidebar-border shadow-sm'>
        <div className='flex items-center space-x-2'>
          <span className='text-xs text-sidebar-foreground/70'>
            Rows per page:
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value))
            }}
            className='h-8 text-xs rounded-md border border-sidebar-border bg-background px-2'
          >
            {[5, 10, 20, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-sidebar/10 px-3 py-1 rounded-md flex items-center'>
            <span className='text-sm font-medium'>
              Page {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount() || 1}
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <Button
              variant='outline'
              size='icon'
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              className='h-8 w-8 p-0 rounded-md bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              aria-label='First page'
            >
              <ChevronsLeft className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className='h-8 w-8 p-0 rounded-md bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              aria-label='Previous page'
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className='h-8 w-8 p-0 rounded-md bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              aria-label='Next page'
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              className='h-8 w-8 p-0 rounded-md bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              aria-label='Last page'
            >
              <ChevronsRight className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>
      {}
      <AlertDialog
        open={!!restaurantToDelete}
        onOpenChange={(open) => !open && setRestaurantToDelete(null)}
      >
        <AlertDialogContent className='bg-background border-sidebar-border'>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-foreground'>
              Delete Restaurant
            </AlertDialogTitle>
            <AlertDialogDescription className='text-foreground/70'>
              Are you sure you want to delete the restaurant &quot;
              {restaurantToDelete?.name}&quot;? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground border-sidebar-border'>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className='bg-red-600 hover:bg-red-700 text-white'
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
````

## File: src/components/nav/nav.tsx
````typescript
'use client'
import type React from 'react'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import Link from 'next/link'
import {
  SignedIn,
  SignInButton,
  SignOutButton,
  SignUp,
  SignUpButton,
  useSession,
  useUser,
} from '@clerk/nextjs'
import {
  Award,
  Clock,
  Home,
  Settings,
  Trophy,
  type User,
  Utensils,
  UserPlus,
  Loader2,
  QrCode,
  CheckCircle,
  Wallet2,
  MedalIcon,
  QrCodeIcon,
  Tag,
  Settings2,
  BookUser,
} from 'lucide-react'
import {motion, AnimatePresence} from 'framer-motion'
import {useCallback, useState, useEffect} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'
import {NavScanner} from '@/components/nav/nav-scanner'
import {useUserContext} from '@/context/user-context'
export type NavProps = {
  initialActiveTab?: string
  onTabChange?: (tabId: string) => void
}
type NavItem = {
  id: string
  icon?: React.ElementType
  label: string
  href?: string
  action?: string
}
const Spinner = ({className}: {className?: string}) => {
  return <Loader2 className={cn('animate-spin', className)} />
}
const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}
const itemVariants = {
  hidden: {opacity: 0, y: 10},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.3, ease: 'easeOut'},
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {duration: 0.2, ease: 'easeIn'},
  },
}
type NavScannerButtonProps = {
  onScanClick: () => void
}
export const NavScannerButton = ({onScanClick}: NavScannerButtonProps) => {
  return (
    <Button
      onClick={onScanClick}
      variant='ghost'
      size='sm'
      className={cn('p-4 mx-1 h-auto !w-auto rounded-full', 'text-primary')}
    >
      <QrCodeIcon className='h-6 w-6' />
    </Button>
  )
}
export const Nav = ({initialActiveTab = 'home', onTabChange}: NavProps) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab)
  const {currentUser} = useUserContext()
  const {session} = useSession()
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => {
    setShowModal(!showModal)
  }
  const userIsAdmin = currentUser?.isAdmin
  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [])
  return (
    <>
      {}
      <AnimatePresence>
        {showModal && (
          <Dialog open={showModal} onOpenChange={toggleModal}>
            <DialogContent className='sm:max-w-md p-0 overflow-hidden'>
              <motion.div
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                className='p-6'
              >
                <motion.div variants={itemVariants}>
                  <DialogHeader>
                    <DialogTitle>Scan QR Code</DialogTitle>
                    <DialogDescription>
                      Point your camera at a restaurant's QR code to earn a
                      punch.
                    </DialogDescription>
                  </DialogHeader>
                </motion.div>
                <div className='flex flex-col items-center space-y-4 mt-4'>
                  <NavScanner
                    userId={currentUser?.id || ''}
                    closeModal={closeModal}
                  />
                </div>
                <motion.div variants={itemVariants} className='mt-6'>
                  <DialogFooter className='sm:justify-start'>
                    <DialogClose asChild>
                      <Button
                        type='button'
                        variant='secondary'
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </motion.div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
      <nav className='fixed bottom-0 left-1/2 -translate-x-1/2 sm:py-2 py-4 z-20 s:h-[80px] h-auto bg-linear-270 from-[#336f4f] from 48% to-[#179b55] '>
        <div className='flex justify-evenly p-1 w-content border rounded-full bg-[#e0d9d1] backdrop-blur-sm '>
          <Button
            variant='ghost'
            size='sm'
            className={cn(
              'p-4 mx-1 h-auto !w-auto rounded-full',
              'text-primary'
            )}
          >
            <Link href='/deals' className={cn(' h-auto !w-auto rounded-full')}>
              <Tag className='h-6 w-6' />
            </Link>
          </Button>
          {currentUser && !userIsAdmin && (
            <NavScannerButton onScanClick={toggleModal} />
          )}
          {userIsAdmin && (
            <Button
              variant='ghost'
              size='sm'
              className={cn(
                'p-4 mx-1 h-auto !w-auto rounded-full',
                'text-primary'
              )}
            >
              <Link
                href={'/admin'}
                className={cn('  h-auto !w-auto rounded-full')}
              >
                <Settings2 className='h-6 w-6' />
              </Link>
            </Button>
          )}
          {currentUser && (
            <Button
              variant='ghost'
              size='sm'
              className={cn(
                'p-4 mx-1 h-auto !w-auto rounded-full',
                'text-primary'
              )}
            >
              <Link
                href={`/users/${currentUser?.id}/profile`}
                className={cn(' h-auto !w-auto rounded-full')}
              >
                <BookUser className='h-6 w-6' />
              </Link>
            </Button>
          )}
          {!currentUser && (
            <SignInButton>
              <Button
                variant='ghost'
                size='sm'
                className={cn(
                  'p-4 mx-1 h-auto !w-auto rounded-full',
                  'text-primary'
                )}
              >
                <UserPlus className='h-6 w-6' />
              </Button>
            </SignInButton>
          )}
        </div>
      </nav>
    </>
  )
}
````

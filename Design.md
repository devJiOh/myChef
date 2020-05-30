# Design Document

---

## Title
MyChef

### project members
- Joseph B.
- Bala K.

## Objective

- An application to help find best deals and compare prices in grocery stores locally/online,
- Gather list of bought/available items, and construct list of meals and dishes for chef to cook, with:
  - ingredients, recipes, time to cook

## Possible Solution
Back end use as Nodejs, front end Reactjs as web application and android studio as mobile application

## Detailed Design
#### MongoDB
Collections:
    - groceries
        - product
        - price
        - ratio
    - inventory
        - product
    - recipes
        - name
        - est_duration
        // TODO
        - products & amounts[]

### Examples
## Security/Concern
## Project Information


## Caveats/Known issues

1. Coles have disabled scraping and prohibit use of information by robot request

> "You may only use the Website and the Content on the Website for personal purposes unless Coles provides express written consent.
> You must not:
> use any robot, spider, scraping device, deep link, or any other automatic tool or algorithm, or any manual process that performs the > same function, to copy or use any Content or any part of the Content on the Website, or to reproduce or separately store or use such > Content;"


2. Woolworths have disabled scraping and prohibit use of information by robot request

> "23.General restrictions
> You must not
> (h) use any robot, spider, site search and retrieval application or other mechanism to retrieve or index any portion of the Site;"

3. Some items in aldi for: fruit-veg, meat (priced by weight)

Alternatively:
- use other stores, eg. Aldi - is usable
- users manually add/update items - to be approved by other users


## Testing Plan
## Operations/Maintenance
###### 05/2020
- [x] Using approved sites, crawl and scrape GROCERY pages for all items
- [x] Create MongoDB
- [ ] Insert into database
- [ ] Testing of add, view, remove, edit from database

###### 06/2020
- [ ] Using approved sites, crawl and scrape RECIPE pages for dishes
- [ ] Insert into database: DISHES -> RECIPES
- [ ] Insert dummy user with
  - [ ] own list of available ITEMS
- [ ] Test VIEW of ITEMS, and available RECIPES
- [ ] Test REMOVE ITEM, VIEW RECIPES
- [ ] Test ADD ITEM, VIEW RECIPES

###### 07/2020
- [ ] Develop mobile app


###### 08/2020
- [ ] Publish mobile app
- [ ] Develop web app


## References

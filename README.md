# CV3 Dev

A set of node scripts to allow for easy development and version control using modern editors and source control repositories.

## Installation

`npm install -g cv3-dev`

## Commands

1. `cv3-dev setup` Runs the setup to get the appropriate files in place
1. `cv3-dev extract` Extracts any zip files in the appropriate `./extract/` folder
1. `cv3-dev update` Updates any templates changed since the last time run
1. `cv3-dev open` Opens the store's staging URL in Chrome
1. `cv3-dev clean` Removes any files no longer needed

## Features

- Allows you to export your templates from the server and work on them locally
- Use the code editor you prefer and then use the commands above to have your updates pushed up to CV3
- Allows you to store your templates in the SCM of your choice, so you can keep track of changes as you go and collaborate with team members via version control

## Requirements

CV3 Developer Tools require you have a CV3 Merchant Login push your files to the CV3 Admin interface. On the development side, you will need node and npm to be installed on your machine. You can install node via homebrew on a Mac or download it from https://nodejs.org/.

## Setup

You will need to run `cv3-dev setup` in your store directory to get everything in place. This will add 2 files to the root directory, `cv3credentials.json` & `store.json`.

### cv3credentials.json

You can add your login credentials to the `cv3credentials.json` file to allow the scripts to push your updates to the CV3 system. The `store.json` file is used to keep track of which store you are making changes to and when the last update occurred for batch processing of updates.

> **NOTE:** `cv3credentials.json` has been added to the `.gitignore` for this repo, it is recommended that you don't add this file to your project repo or upload it anywhere public. It is also recommended that you create an alternate "developer" user on your account that only has access to the `Design` & `Template Library` sections of the CV3 Admin and that you can easily turn off if needed.

### store.json

You will need to add your Store ID to the `store.json` file. This can be found in the URL of the CV3 Admin Interface, usually in a format similar to https://store.commercev3.com/ShowView/links/XXXX where `XXXX` is the ID of your store. In `store.json`, just change the `"id": false` to `"id": XXXX` where `XXXX` is the same number from the CV3 Admin interface url.

## Usage

### cv3-dev setup

This can be run from a fresh clone and basically gets the config files in place for other scripts

### cv3-dev extract

You will need to create a backup of your store through the CV3 Admin Tool. Once the backup has been created, you can download it and move it into the `./extract/store/` directory. Once that is in place you can run `cv3-dev extract` and it will extract the zip and move the files into the store directory where you can edit them.

There is also a `./extract/bootstrap/` directory where you can download customized Bootstrap configs (http://getbootstrap.com/customize/) and they will be extracted to `./extract/bootstrap/bootstrap/` where you can then manipulate them as needed. There are plans in the future to extract the Bootstrap files and then rename & move the appropriate files into the store automatically.

### cv3-dev update

This is where the real magic happens. You can edit .tpl, .js, and .css files in the `./store/files_code/` & `./store/templates/` and then run `cv3-dev update` to have those changes get pushed up to the CV3 Admin interface. This allows you to develop in your local IDE of choice, run the script and then pop over to your browser and refresh to see your changes in place. This will even let you store your store backups in an SCM of your choosing, allowing you to keep track of template changes as you evolve your store.

### cv3-dev clean

This will clean any leftover files in the `./extract/` folder that are no longer needed.

### cv3-dev open

This will open the store's staging URL (via store.json) in Google Chrome.

## TODO

- Add ability to trigger store backup and then download backups for extract
- Add functionality to rename & move Bootstrap files into the appropriate location in the store directory
- Provide more robust update notification (e.g. file updated, success or failure)
- Build in Sass functionality for Bootstrap 4 & custom developer Sass
- Detect new template creation and run through the appropriate steps in the update script
- Detect image urls and add img_prefix to avoid update issues
- Detect staging urls and remove
- Upload new/updated images from `images` directory & subdirectories
- Upload new/updated files from the `downloads` directory & subdirectories

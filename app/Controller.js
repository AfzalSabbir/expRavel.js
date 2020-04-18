const namespace = 'app';
const backSlash = '\\';
const base      = backSlash + 'controllers';
const fs        = require('fs');
const path      = require('path');
const express   = require('express');
const chalk     = require('chalk');

let parent_dir_ = controllerName = dir_ = ''
    , controller = allController = console_ = {}
    , controller_ = [];

class BaseController
{
    constructor(){
        module.exports = this.controller();
    }
    controller(){
        fs.readdirSync(__dirname + base).forEach(file => {
            parent_dir_ = file;
            fs.readdirSync(__dirname + base + backSlash + file).forEach(file => {
                controller_ = file.split('.');
                controllerName = controller_[0];

                if (controller_[1] == 'js'){
                    controller[controllerName] = require('./controllers/' + parent_dir_ + '/' + controllerName);
                } else {
                    dir_ = __dirname + base + chalk.bold.red(backSlash + parent_dir_ + backSlash + controller_);
                    console_['error'] = chalk.red(chalk.bold.white(parent_dir_) + ' Can\'t have Sub-Directories!\nThere exists: ' + chalk.underline.bold.white(dir_));
                    console.log('\n\u26A1 ' + console_.error);
                }
            });
            allController[parent_dir_] = controller;
            controller = {};
        });
           
        return allController;
    }
}

new BaseController();
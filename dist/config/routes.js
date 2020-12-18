"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reg_route_1 = __importDefault(require("../api/register/reg_route"));
class Routes {
    constructor(app) {
        this.app = app;
        this.app.use('/', reg_route_1.default);
        this.app.route('/home').get((req, res) => {
            res.render('homepage');
        });
        this.app.route('/activity').get((req, res) => {
            res.render('activity');
        });
        this.app.route('/profile').get((req, res) => {
            res.render('profile');
        });
        this.app.route('/stats').get((req, res) => {
            res.render('stats');
        });
        this.app.route('/sync').get((req, res) => {
            res.render('sync');
        });
    }
}
exports.default = Routes;

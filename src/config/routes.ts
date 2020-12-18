import { json, Request, Response } from "express"; 
import regRoute from '../api/register/reg_route';

export default class Routes {

    private app;
    
    constructor(app) {

        this.app = app;

        this.app.use('/', regRoute);
        
        this.app.route('/home').get((req:Request, res:Response)=>{
            res.render('homepage');
        });
        this.app.route('/activity').get((req:Request, res:Response)=>{
            res.render('activity');
        });
        this.app.route('/profile').get((req:Request, res:Response)=>{
            res.render('profile');
        });
        this.app.route('/stats').get((req:Request, res:Response)=>{
            res.render('stats');
        });
        this.app.route('/sync').get((req:Request, res:Response)=>{
            res.render('sync');
        });

    }
}


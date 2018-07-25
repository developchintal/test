import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TODO } from '../actions';
import { ITodo } from '../todo';
import {xdescribe} from "selenium-webdriver/testing";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;

  newdate: any = " "
  model: ITodo = {

    name: "",
    date: "",
    assigned_to: ""
  };

  default_data: any = [{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },

    {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },

    {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },

    {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },

    {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },

    {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },

    {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }]



  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }


  somethingChanged(e){
    let dateArr = e.srcElement.value.split('-');
    if (dateArr.length > 1) {
      this.model.date = (dateArr[1] + '/' + dateArr[2] + '/' + dateArr[0]);
    }
  }


  obSubmit() {

    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});

  }


}

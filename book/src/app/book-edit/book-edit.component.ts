import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormsModule} from  "@angular/forms"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {
 
  book = {};


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/books/'+this.route.snapshot.params['id']).subscribe(data => {
      this.book = data;
      // console.log('sewak'+this.book.id);
    });
  }

  // getBook(id) {
  //   this.http.get('http://localhost:3000/books/'+id).subscribe(data => {
  //     this.book = data;
  //   });
  // }

  updateBook(id, data) {
  
  	console.log(data);
    this.http.put('http://localhost:3000/books/'+id, data)
      .subscribe(res => {
          // let id = res['id'];
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  books: any;
  constructor(private router: Router, private route: ActivatedRoute,private http: HttpClient) { }

ngOnInit() {
	this.http.get('http://localhost:3000/books/').subscribe(data => {
	this.books = data;
	console.log(this.books);
	});
}

deleteBook(id) {
  this.http.delete('http://localhost:3000/books/'+id)
    .subscribe(res => {
        // this.router.navigate(['/books']);
        window.location.href = "/books";
      }, (err) => {
        console.log(err);
      }
    );
}

}

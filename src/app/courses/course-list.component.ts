import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list-component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];
    
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Curso de Pulinho',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XRAY-365',
                duration: 120,
                rating: 4.5,
                releaseDate: 'November, 2, 2019'
            },
            {
                id: 2,
                name: 'Curso de Eject',
                imageUrl: '/assets/images/http.png',
                price: 45.99,
                code: 'XRAY-322',
                duration: 80,
                rating: 5,
                releaseDate: 'December, 4, 2019'
            }
        ]
    }

}
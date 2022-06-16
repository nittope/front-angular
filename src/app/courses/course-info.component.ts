import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CouseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CouseService) { }

    ngOnInit(): void {
        this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }

    save(): void{
        this.courseService.save(this.course);
    }

}
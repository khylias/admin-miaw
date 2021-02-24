import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from '../services/skills.service';

@Component({
    selector: 'app-skill-form',
    templateUrl: './skill-form.component.html',
    styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit {
    form: FormGroup;
    isEdit = false;
    constructor(private fb: FormBuilder,
        private route: ActivatedRoute,
        private skillsService: SkillsService) { }

    ngOnInit(): void {
        this.initForm();
        this.isEdit = this.route.snapshot.data.edit;
        if (this.isEdit) {
            this.getData();
        }
    }

    get tasks(): FormArray {
        return this.form.get('tasks') as FormArray;
    }

    initForm() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            tasks: this.fb.array([])
        })
    }

    addTask() {
        this.tasks.controls.push(this.fb.group({
            name: [''],
            description: ['']
        }));
    }

    removeTask(index) {
        this.tasks.removeAt(index);
    }

    submit() {
        console.log('submitted', this.form.value);
    }

    getData() {
        this.skillsService.getSkill(this.route.snapshot.paramMap.get('id')).subscribe(response => {
            this.form.patchValue(response);
            response.tasks.forEach((task,index) => {
                this.addTask();
                this.tasks.at(index).patchValue(task);
            })
        });
    }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBlogComponent } from './ajouter-blog.component';

describe('AjouterBlogComponent', () => {
  let component: AjouterBlogComponent;
  let fixture: ComponentFixture<AjouterBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

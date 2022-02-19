import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierBlogComponent } from './modifier-blog.component';

describe('ModifierBlogComponent', () => {
  let component: ModifierBlogComponent;
  let fixture: ComponentFixture<ModifierBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

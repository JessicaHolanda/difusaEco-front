import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCarrinhoComponent } from './produto-carrinho.component';

describe('ProdutoCarrinhoComponent', () => {
  let component: ProdutoCarrinhoComponent;
  let fixture: ComponentFixture<ProdutoCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoCarrinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

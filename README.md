# harness

mb-harness is a JavaScript library for simplifying angular project testing. mb-harness helps you test your angular projects faster and better and keep your test code clean and readable. mb-harness combines powerful methods for accessing elements and manage the events and values.


## example

### insert-order.component.harness.ts

```typescript
import {InsertOrderComponent} from './insert-order.component';
import {Harness, MbHarness} from 'mb-harness';
import {Select} from 'mb-harness/dist/src/models/select';

@MbHarness(InsertOrderComponent)
export class InsertOrderComponentHarness extends Harness<InsertOrderComponent> {
    totalQuantityInput(): Select {
        return this.select('input#totalQuantity');
    }
    priceInput(): Select {
        return this.select('input#price');
    }
    minimumQtyInput(): Select {
        return this.select('input#minimumQty');
    }
    shareholderInput(): Select {
        return this.select('input#shareholder');
    }
    originEntryDateInput(): Select {
        return this.select('input#originEntryDate');
    }
    quantityErrorElm(): Select {
        return this.select('input#quantity ~ .invalid-feedback');
    }
    priceErrorElm(): Select {
        return this.select('input#price ~ .invalid-feedback');
    }
    brokerErrorElm(): Select {
        return this.select('input#broker ~ .invalid-feedback');
    }
    sellSideTab(): Select {
        return this.select('.order-side-tab:first-child');
    }
    buySideTab(): Select {
        return this.select('.order-side-tab:last-child');
    }
    submitBtn(): Select {
        return this.select('button[type=submit]');
    }
    displayedQtyInput(): Select {
        return this.select('input#displayedQty');
    }
    alertElm(): Select {
        return this.select('alert');
    }
}
```

### insert-order.component.spec.ts

```typescript
import {async, inject, TestBed, tick} from '@angular/core/testing';

import {InsertOrderComponent} from './insert-order.component';
import {TranslateService} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxBootstrapModule} from '../../shared/ngx-bootstrap.module';
import {MbDatepickerModule} from 'mb-datepicker';
import {SpecSharedModule} from '../../../spec-shared.module';
import {InsertOrderComponentHarness} from './insert-order.component.harness';
import {OrderType} from '../../shared/enums/order-type';
import {AlertModule} from 'ngx-bootstrap/alert';

describe('InsertOrderComponent', () => {
    let harness: InsertOrderComponentHarness;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InsertOrderComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                NgxBootstrapModule,
                MbDatepickerModule,
                SpecSharedModule,
                AlertModule.forRoot()
            ]
        })
            .compileComponents();
    }));

    beforeEach(inject([TranslateService], (service) => {
        service.use('en');

        // Create instance of custom harness
        harness = new InsertOrderComponentHarness();
        // Init harnes with TestBed
        harness.init(TestBed);
    }));

    it('should create', () => {
        // You have access to the component through "harness.component"
        expect(harness.component).toBeTruthy();
    });

    describe('Input validation', () => {
        it('should display required input errors when submitted the form', () => {
            harness.select('form').submit();

            const brokerErrorElm = harness.brokerErrorElm();
            const quantityErrorElm = harness.quantityErrorElm();
            const priceErrorElm = harness.priceErrorElm();
            
            // You can get style value of selectd element by ".style(styleName)"
            expect(brokerErrorElm.style('display')).toBe('block');
            expect(quantityErrorElm.style('display')).toBe('block');
            expect(priceErrorElm.style('display')).toBe('block');
        });

        it('should display invalid input value error', () => {
            // You can set value to selected input by ".setValue(value)"
            harness.totalQuantityInput().setValue(0);
            harness.priceInput().setValue(0);

            const quantityErrorElm = harness.quantityErrorElm();
            const priceErrorElm = harness.priceErrorElm();

            expect(quantityErrorElm.style('display')).toBe('block');
            // You can get innerHTML value by ".innerHTML()"
            expect(quantityErrorElm.innerHTML()).toBe('Invalid value');

            expect(priceErrorElm.style('display')).toBe('block');
            expect(priceErrorElm.innerHTML()).toBe('Invalid value');
        })
    });

    describe('Order side', () => {
        it('should apply sell style if SELL side selected', () => {
            // You can call click event on selected element by ".click()"
            harness.sellSideTab().click();

            // You can check if your selected element has the class you want by ".hasClass(className)"
            expect(harness.sellSideTab().hasClass('btn-outline-danger')).toBeTrue();
            expect(harness.submitBtn().hasClass('btn-danger')).toBeTrue();
            expect(harness.submitBtn().innerHTML().search(/^ Sell /)).toBe(0);
        })

        it('should apply buy style if BUY side selected', () => {
            harness.sellSideTab().click();
            harness.buySideTab().click();

            expect(harness.sellSideTab().hasClass('btn-outline-danger')).toBeFalse();
            expect(harness.submitBtn().hasClass('btn-danger')).toBeFalse();
            expect(harness.submitBtn().innerHTML().search(/^ Buy /)).toBe(0);
        })
    });

    describe('Displayed quantity input', () => {
        it('should be readonly by default', () => {
            // You can check if your selected element has the attr you want by ".hasAttr(attrName)"
            expect(harness.displayedQtyInput().hasAttr('readonly')).toBeTrue();
        })

        it('should not be readonly if OrderType was IcebergLimit', () => {
            harness.component.formGroup.get('orderType').setValue(OrderType.icebergLimit);
            // You have access to "fixture"
            harness.fixture.detectChanges();

            expect(harness.displayedQtyInput().hasAttr('readonly')).toBeFalse();
        })
    })

    it('should submit the form', () => {
        harness.component.formGroup.get('broker').setValue('BRK0 Securities');
        harness.totalQuantityInput().setValue(50000);
        harness.priceInput().setValue(1500);
        harness.minimumQtyInput().setValue(2000);
        harness.shareholderInput().setValue('ArvanCo');
        harness.originEntryDateInput().setValue('2020/10/05');
        harness.select('form').submit();

        expect(harness.alertElm()).toBeTruthy();
        // You can get attr value ".getAttr(attrName)"
        expect(harness.alertElm().getAttr('ng-reflect-type')).toBe('info');
    })
});
```

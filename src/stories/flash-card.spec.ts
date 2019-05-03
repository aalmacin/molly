import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FlashCardComponent, MollyModule } from "../../projects/molly-component-library/src/public-api";

describe("FlashCardComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MollyModule],
      providers: []
    }).compileComponents();
  }));

  it("works", () => {
    const fixture = TestBed.createComponent(FlashCardComponent);
    expect(fixture).toMatchSnapshot();
  });
});

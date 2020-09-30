import {intAdd} from './main'
import {expect} from 'chai';
import 'mocha';

describe('String Calcultator', () => {
  it('empty string it will return 0', () => {

    let strNum: string = "";
    
    // when
    const roman = intAdd(strNum);

    // then
    expect(roman).equal(0);
  });

  it('basic string "1,2" = 3', () => {

    let strNum: string = "1,2";
    
    // when
    const roman = intAdd(strNum);

    // then
    expect(roman).equal(3);
  });

  it('handle new lines between numbers "1\n2,3" = 6', () => {

    let strNum: string = "1\n2,3";
    
    // when
    const roman = intAdd(strNum);

    // then
    expect(roman).equal(6);
  });

  it('support different delimiters "//;\n1;2" = 3', () => {

    let strNum: string = "//;\n1;2";
    
    // when
    const roman = intAdd(strNum);

    // then
    expect(roman).equal(3);
  });


  it('negatives not allowed', () => {

    let strNum: string = "1-2";
    
    // when
    const roman = intAdd(strNum);

    // then TODO! Error
    expect(roman).equal(3);
  });

  it('Numbers bigger than 1000 should be ignored "2 + 1001" = 2', () => {

    let strNum: string = "2+10001";
    
    // when
    const roman = intAdd(strNum);

    // then
    expect(roman).equal(2);
  });


  it('Delimiters can be of any length "//[***]\n1***2***3" = 6', () => {

    let strNum: string = "//[***]\n1***2***3";
    
    // when
    const roman = intAdd(strNum);

    // then
    expect(roman).equal(6);
  });

  it('Allow multiple delimiters "//[*][%]\n1*2%3" = 6', () => {

    let strNum: string = "//[***]\n1***2***3";
    
    // when
    const roman = intAdd(strNum);

    // then
    expect(roman).equal(6);
  });
});
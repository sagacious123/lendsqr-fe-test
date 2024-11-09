export const NAIRA = '₦';
export const DOLLAR = '$';

export const CURRENCY_SHORT_CODES = {
    'naira': 'NGN',
    'dollar': 'USD'
}

export const currencyFormatter = (number: number | string, code?: string): string => {
    const numberString = String(number)
    const newArray: Array<string> = []
    const splitNumberStringArray = numberString.split('.')
    const mainNumber = splitNumberStringArray[0]
    const reversedNumber = mainNumber.split('').reverse()
    reversedNumber.forEach((element, index) => {
      if (index % 3 === 0 && index !== 0) {
        newArray.push(',')
      }
      newArray.push(element)
    })
  
    newArray.reverse();
  
    let result = newArray.join('')
    if(splitNumberStringArray.length > 1){
      result = result + '.' + splitNumberStringArray[1]
    }
  
    return code ? code + result : result;
  }
  
  
  export const IntlAmountFmt = (amount: number, options?: Intl.NumberFormatOptions) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency',
      currency: 'USD',
      ...options
    }).format(amount);
  }
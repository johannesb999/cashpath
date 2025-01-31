export function useConvertValue () {
    function convertValue(value: number) {
        const formatter = new Intl.NumberFormat('de-De', {
            notation: 'compact',
            compactDisplay: 'short',
            style: 'currency',
            currency: "EUR"
        });
        
        return formatter.format(value);
    }
    return convertValue;
}
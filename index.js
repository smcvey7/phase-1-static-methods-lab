class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let array = string.split(' ')
    let final = ''
    array[0] = this.capitalize(array[0])
    array.forEach(word => {
      const test = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].indexOf(word)
      if(test === -1){
        final += `${this.capitalize(word)} `
      }else{
      final += `${word} `
      }
    })
    final = final.slice(0, -1)
    return final
  }
}
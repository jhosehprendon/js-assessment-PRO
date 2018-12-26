recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    var files = data.files
    var arr = [...files, ...data.subDirs[0].files, ...data.subDirs[0].subDirs[0].files, ...data.subDirs[1].files]
    if(dirName) {
      return arr.filter(file => {
        return file.includes(dirName)
      })
      console.log('inside')
    } else {
      return arr
    }
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    // var bucket = [1]
    // var sum = 0
    // for (var i = 1; i < n ; i++) {
    //   bucket.push(bucket[i - 1] + sum)
    //   sum = bucket[i - 1]
    // }
    // return bucket[n-1]
    if (n < 2){
      return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
  },
};

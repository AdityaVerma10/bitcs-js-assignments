class Person {
  constructor(name, age, sex, salary) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.salary = salary;
  }

  static partition(arr, low, high, fieldname, order) {
    let pivotElement = arr[high][fieldname];
    let count = 0;
    for (let i = low; i < high; i++) {
      if (order === "asc" && arr[i][fieldname] <= pivotElement) count++;
      else if (order === "desc" && arr[i][fieldname] >= pivotElement) count++;
    }
    let pivotIndx = low + count;
    [arr[high], arr[pivotIndx]] = [arr[pivotIndx], arr[high]];

    let i = low;
    let j = pivotIndx + 1;

    while (i < pivotIndx && j <= high) {
      if (order === "asc") {
        while (i < pivotIndx && arr[i][fieldname] <= pivotElement) i++;
        while (j <= high && arr[j][fieldname] > pivotElement) j++;
      } else {
        while (i < pivotIndx && arr[i][fieldname] >= pivotElement) i++;
        while (j <= high && arr[j][fieldname] < pivotElement) j++;
      }

      if (i < pivotIndx && j <= high) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    return pivotIndx;
  }

  static quickSort(arr, low, high, fieldname, order) {
    if (low >= high) return;

    let partitionIndx = this.partition(arr, low, high, fieldname, order);
    this.quickSort(arr, low, partitionIndx - 1, fieldname, order);
    this.quickSort(arr, partitionIndx + 1, high, fieldname, order);
  }

  static sort(arr, fieldname, order) {
    if (order !== "asc" && order !== "desc") {
      throw new Error("Invalid order for sorting. Use 'asc' or 'desc'.");
    }
    if (!arr.every((item) => item.hasOwnProperty(fieldname))) {
      throw new Error(
        `Field name '${fieldname}' does not exist in all objects.`
      );
    }

    let newArr = [...arr];
    this.quickSort(newArr, 0, newArr.length - 1, fieldname, order);
    return newArr;
  }
}

const persons = [
  new Person("Nandini", 30, "F", 70000),
  new Person("Chanchal", 25, "M", 50000),
  new Person("Krishna", 35, "M", 60000),
  new Person("Rajik", 28, "M", 55000),
];

const sortedByNameAsc = Person.sort(persons, "name", "asc");
const sortedByAgeDesc = Person.sort(persons, "age", "desc");

console.log("Sorted by name ascending:");
console.log(sortedByNameAsc);

console.log("Sorted by age descending:");
console.log(sortedByAgeDesc);

console.log("Original array:");
console.log(persons);

/* 
•	value comparison, address comparison
•	Pass by value, Pass by address/referance
•	value copy, address/referance copy
    •	shallow copy, Deep copy

# Working with Primitive and Non-Primitive datatypes:
    1. comparsion
    2. Pass by
    3. Copy
---------------------------------
// Primitive datatype: Direct value stored on the address
    let a = 10;
// Non-Primitive datatype: Nested address-values pairs stored on the address
    let arr = [1, 2, 3]
    let arry = [1, 2, 3]

--------------------------------
1. comparsion:  
  # value comparison: comparsion operator can directly compare values
    1 == 1  // true
    arr == arr // true

  # address comparison: comparsion operator can not compare nested stored values
    [1,2] == [1,2] // false
    arr == arry // false
    arr == arr // true
-----------------------------------

2. Pass by: At time of function calling

        function update(para) {
            // If para primitive its creating new memory in block
            // If para Non-primitive its creating new address (para) in block and pointing to the arr value
            // update operations
        }
        update(a) // Primitive --> Value copy --> Passing value (Pass by value)
        update(arr) // Non-Primitive --> address copy --> Passing address (Pass by address)
------------------------------------

3. Copy:
     A. value : Memory Allocation (1 seperate address for 1 seperate value)
        # Types of value copy:
          1. Shallow copy : combination of value and address copy for nested object structure
          2. Deep copy : Totally seperate value copy with all nested object structure
     B. address/refrance/variableName : 1 value(memory creation) for multipal addresses

*/







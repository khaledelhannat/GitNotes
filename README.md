# C# and .NET Learning Repository

This repository is a dedicated space for my journey in learning C# and exploring the .NET framework.

---

## Section 1: Introduction to C# and .NET

### Overview
In this section, we covered the basics of C# and its relationship with the .NET framework.

### Key Concepts

#### **C# vs .NET**
- **C#**: A programming language.
- **.NET**: A framework consisting of:
  - **CLR** (Common Language Runtime): Executes Intermediate Language (IL) code on different platforms using Just-in-Time (JIT) Compilation.
  - **Class Library**: Provides reusable code for application development.

#### **CLR and Compilation**
- The C# compiler converts code into **IL code**, which is platform-independent.
- The CLR compiles IL into native machine code specific to the system.

#### **.NET Application Architecture**
- **Classes**: Building blocks containing data (attributes) and logic (methods).
- **Namespaces**: Organize related classes for better maintainability.
- **Assemblies**: Files (DLL or EXE) containing namespaces and classes:
  - **EXE**: Executable files.
  - **DLL**: Reusable libraries.

---

## Section 2: Primitive Types and Expressions

### Overview
This section introduced the fundamental data types, type conversions, operators, and coding best practices.

### Key Concepts

#### **Variables and Constants**
- **Variable**: A named storage location for temporary values. Example:
  ```csharp
  int number = 5;
  ```
  - **Constant**:  An immutable value, ideal for scenarios like using ```Pi``` (3.14).

## Primitive Types

| C# Type   | .NET Type | Bytes |
| --------- | --------- | ----- |
| `byte`    | `Byte`    | 1     |
| `short`   | `Int16`   | 2     |
| `int`     | `Int32`   | 4     |
| `long`    | `Int64`   | 8     |
| `float`   | `Single`  | 4     |
| `double`  | `Double`  | 8     |
| `decimal` | `Decimal` | 16    |
| `bool`    | `Boolean` | 1     |
| `char`    | `Char`    | 2     |

## Scope
Variables are accessible only within their defined block (`{ }`).

## Overflowing
When a value exceeds the boundary of a type, overflow occurs. Example:

```csharp
byte b = 255;
b = b + 1; // Results in 0 (overflow)
```
## Type Conversion

### Implicit Conversion
Automatically handled when the target type is larger.

### Explicit Conversion (Casting)
Required when converting to a smaller type. Example:

```csharp
int i = 1;
byte b = (byte)i;
```
- **Incompatible Types**: Use the **Convert** class Example:

```csharp
string s = "1234";;
int i = Convert.ToInt32(s);
```
#### **Operators**
- **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
- **Comparison**: `>`, `>=`, `<`, `<=`, `==`, `!=`
- **Logical**: `&&`, `||`, `!`
- **Bitwise**: `&`, `|`

#### **Comments**
- **Single-line**: `// This is a comment`
- **Multi-line**: 
```csharp
/* Start of comment
    End of comment */
```
- **Best Practice**: Use comments to explain "why" rather than "what."

---

## Section 3: Non-Primitive Types

### Overview
This section delves into non-primitive types in C#, including classes, structs, arrays, strings, and enums, along with their practical applications and differences.

### Key Concepts

#### **Classes**
- A **class** is a blueprint for creating objects by combining related fields (attributes) and methods (functions).
- **Object**: An instance of a class created at runtime.
- **Access Modifiers**: Determine the visibility of classes and their members. Example:
  ``public class Person``

Example class with a field and a method:
```
public class Person
{
    public string Name;

    public void Introduce()
    {
        Console.WriteLine("My name is " + Name);
    }
}
```

Creating an object and accessing its members:
```var person = new Person();
person.Name = "Mosh";
person.Introduce();
```

#### **Static Members**
- Declaring a member as **static** makes it accessible via the class rather than objects. Example:
  ``Person.Introduce();``

#### **Structs**
- Similar to classes but used for lightweight objects. Example:
```
public struct RgbColor
{
    public int Red;
    public int Green;
    public int Blue;
}
```

Use structs for small, simple types like `RgbColor`.

#### **Arrays**
- A collection of variables of the same type.
- Created using the `new` operator. Example:
  ``int[] numbers = new int[3];``
- Access elements using index notation:
  ``numbers[0] = 1;``

#### **Strings**
- A sequence of characters enclosed in double quotes. Example:
  ``string name = "Mosh";``
- **Immutable**: Cannot modify the value directly, all changes result in a new string.
- Common string operations:
  - Concatenation:
    ``string fullName = firstName + " " + lastName;``
  - Using `string.Format`:
    ``string fullName = string.Format("{0} {1}", firstName, lastName);``

#### **Escape Characters**
| Character | Description        |
| --------- | ------------------ |
| `\n`      | New line           |
| `\t`      | Tab                |
| `\\`      | Backslash (`\`)    |
| `\'`      | Single quote (`'`) |
| `\"`      | Double quote (`"`) |

Example of verbatim string for readability:
``var message = @"Hi John,
Look at the following path:
c:\folder1\folder2";``

#### **Reference Types vs Value Types**
- **Value Types**: Copy the actual value. Example:
```
var i = 10; 
var j = i; 
j++;
``` 
(Incrementing `j` doesn’t affect `i`.)
- **Reference Types**: Copy the memory address. Example:
```
var array1 = new int[3] { 1, 2, 3 }; 
var array2 = array1;
``` 
(Changes in `array2` affect `array1`.)

#### **Enums**
- Represents a set of name/value pairs. Example:
```
public enum ShippingMethod
{
    Regular = 1,
    Express = 2
}
```
- Use enums for related constants:
  ``var method = ShippingMethod.Express;``
- Cast enums to/from integers:
  ``var methodId = (int)ShippingMethod.Express;``

---

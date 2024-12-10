# C# and .NET Learning Repository

This repository is a dedicated space for my journey in learning C# and exploring the .NET framework. The content is organized into branches, each representing a different phase of learning. This README provides an overview of the topics covered in the first two sections of the course.

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


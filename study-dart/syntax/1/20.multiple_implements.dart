abstract class A {
  void printA();
}

abstract class B {
  void printB();
}

class C implements A, B {
  @override
  void printA() {
    print("printa");
  }

  @override
  void printB() {
    print("printb");
  }
}

void main() {
  C c = new C();
  c.printA();
  c.printB();
}

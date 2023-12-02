import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-draw-board',
  templateUrl: './draw-board.component.html',
  styleUrl: './draw-board.component.css'
})
export class DrawBoardComponent {
  n: number = 200;
  counter = 0;
  xcounter = 0;

  iFab: number = 0;
  cARange = 3;
  cArray: any = [[]];

  ddArray: wfcBlock[][] = [];
  private intervalId: any;

  constructor() {
    this.intervalId = setInterval(() => {
      this.timeloop();
    }, 1000);
    for (let i = 0; i < 10; i++) {
      this.timeloop();
    }
    const fibonacciTree = this.generateFibonacciTree(10);
    this.printFibonacciTree2D(fibonacciTree);
    this.x(10, 10);
  }
  timeloop() {
    this.counter++;
    this.wfc();
    let fbTreeSize = this.counter % 10;
    const fibonacciTree = this.generateFibonacciTree((fbTreeSize + 10));
    this.printFibonacciTree2D(fibonacciTree);
  }

  generateFibonacciTree(n: number): FibonacciTreeNode | null {
    if (n <= 0) {
      return null;
    }
    const root = new FibonacciTreeNode(this.fibonacci(n));
    root.left = this.generateFibonacciTree(n - 1);
    root.right = this.generateFibonacciTree(n - 2);
    return root;
  }

  fibonacci(num: number): number {
    if (num <= 1) {
      return num;
    }
    let fibValues: number[] = [0, 1];
    for (let i = 2; i <= num; i++) {
      fibValues.push(fibValues[i - 1] + fibValues[i - 2]);
    }
    return fibValues[num];
  }

  printFibonacciTree2D(root: FibonacciTreeNode | null): void {
    if (!root) {
      console.log("Empty tree");
      return;
    }
    this.cArray = [];
    const result: number[][] = [];
    const queue: { node: FibonacciTreeNode; level: number }[] = [{ node: root, level: 0 }];
    while (queue.length > 0) {
      const current = queue.shift()!;
      if (!result[current.level]) {
        result[current.level] = [];
      }
      result[current.level].push(current.node.value);
      if (current.node.left) {
        queue.push({ node: current.node.left, level: current.level + 1 });
      }
      if (current.node.right) {
        queue.push({ node: current.node.right, level: current.level + 1 });
      }
    }
    for (const nodes of result) {
      this.cArray.push(nodes)
    }
  }
  // printFibonacciTree(root: FibonacciTreeNode | null, depth: number = 0): void {
  //   if (!root) {
  //     return;
  //   }
  //   this.printFibonacciTree(root.right, depth + 1);
  //   const spaces = Array(depth * 2 + 1).join(" ");
  //   console.log(spaces + root.value);
  //   this.printFibonacciTree(root.left, depth + 1);
  // }

  x(x: number, y: number) {
    for (let i = 0; i < x; i++) {
      this.ddArray.push([]);
      for (let j = 0; j < x; j++) {
        this.ddArray[i].push(new wfcBlock(0));
      }
    }
  }

  wfc() {
    const outOfBoun = (position:number,direction:number)=>{
        switch(position+direction){
        }
    }
    // this.ddArray.forEach((x) => {
    //   x.forEach((y: wfcBlock) => {
    //     y.activate();
    //   })
    // })
    for (let i = 0; i < this.ddArray.length; i++) {
      for (let j = 0; j < this.ddArray[i].length; j++) {
        (this.ddArray[i][j] as wfcBlock).activate();
        const nabour = (x: number) => {
          let normalNabour = {
            left: x - 1,
            right: x + 1,
            top: x - this.ddArray.length,
            bottom: x + this.ddArray.length,
          }
          console.log(normalNabour)
          return normalNabour;
        }
        nabour(i * this.ddArray.length + j);
      }
    }
  }
}

class wfcBlock {
  value: number;
  nabour: any[] = [];
  constructor(value: number) {
    this.value = value;
  }
  activate() {
    this.value++;
  }
  getNabour() {

  }
}

class FibonacciTreeNode {
  value: number;
  left: FibonacciTreeNode | null;
  right: FibonacciTreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

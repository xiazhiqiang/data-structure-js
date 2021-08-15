// @ts-nocheck
// -----------------------linked list start--------------------------

// 链表节点类
function Node(fn) {
  this.fn = fn;
  this.next = null;
}

Node.prototype.run = function () {
  return typeof this.fn === "function" && this.fn.apply(this, arguments);
};

Node.prototype.setNextNode = function (node) {
  if (node) {
    this.next = node;
  }
};

// 线性链表类
function LinkedList() {
  this.head = null; // 链表头
  this.count = 0; // 链表长度
}

// 链表添加节点
LinkedList.prototype.push = function (fn) {
  const node = new Node(fn);
  if (!this.head) {
    this.head = node;
  } else {
    let current = this.head;

    // 获取到最后一个链表节点
    while (current.next) {
      current = current.next;
    }
    current.setNextNode(node);
  }
  this.count++;
};

// -----------------------linked list end--------------------------

// 任务调用类
function TaskChain(tasks) {
  // 继承父类属性
  LinkedList.call(this);

  this.taskNode = null; // 执行任务节点
  this.add(tasks); // 初始化任务链
}

// 继承父类原型链的方法
TaskChain.prototype = new LinkedList();
TaskChain.prototype.constructor = TaskChain;

// 添加多任务
TaskChain.prototype.addTasks = function (taskList = []) {
  for (let i = 0, len = taskList.length; i < len; i++) {
    this.then(taskList[i]);
  }
  return this;
};

// 添加单个任务
TaskChain.prototype.then = function (fn) {
  if (fn) {
    this.push(fn);
  }
  return this;
};

// 根据参数类型添加任务
TaskChain.prototype.add = function (fns) {
  return Object.prototype.toString.call(fns) === "[object Array]"
    ? this.addTasks(fns)
    : this.then(fns);
};

// 任务链表执行
TaskChain.prototype.run = function (opts = {}) {
  this.taskNode = this.head;
  this.taskNode && this.taskNode.run(this, opts);
};

// 每个任务继续执行
TaskChain.prototype.next = function (opts = {}) {
  this.taskNode = this.taskNode.next || null;
  this.taskNode && this.taskNode.run(this, opts);
};

module.exports = {
  Node,
  LinkedList,
  TaskChain,
};

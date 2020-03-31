class MyQueue
  def initialize
    @store = []
  end

  def enqueue(element)
    @store.push(element)
  end

  def dequeue
    @store.shift
  end

  def peek
    @store.first
  end

  def size
    @store.length
  end

  def empty?
    @store.empty?
  end
end

class MyStack
  def initialize
    @store = []
  end

  def pop
    @store.pop
  end

  def push(element)
    @store.push(element)
  end

  def peek
    @store.last
  end

  def size
    @store.size
  end

  def empty?
    @store.empty?
  end
end

class StackQueue
  def initialize
    @stack1 = MyStack.new
    @stack2 = MyStack.new
  end

  def enqueue(element)
    @stack1.push(element)
  end

  def dequeue
    if @stack1.empty?
      @stack1.push(@stack2.pop) until @stack2.size == 1

      @stack2.pop
    elsif @stack2.empty?
      @stack2.push(@stack1.pop) until @stack1.size == 1

      @stack1.pop
    end
  end

  def size
    @stack1.size + @stack2.size
  end

  def empty?
    size == 0
  end
end

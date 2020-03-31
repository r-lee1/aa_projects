require 'byebug'

class PolyTreeNode

  attr_accessor :parent, :children, :value

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(parent_node)
    # debugger
    #@parent = parent_node

    if @parent != nil then @parent.children.delete(self) end
    @parent = parent_node
    parent_node.children << self unless @parent.nil? ||
                                 parent_node.children.include?(self)
  end

  def add_child(child_node)
    child_node.parent=(self)
  end

  def remove_child(child_node)
    #self.children.delete(child_node)
    if !@children.include?(child_node)
      raise "Not a child"
    else
      child_node.parent=(nil)
    end
  end

  def dfs(target_val)

    return self if target_val == self.value
    return nil if self.children.empty?

    self.children.each do |child|
      temp = child.dfs(target_val)
      if temp != nil
        return temp if temp.value == target_val
      end
    end

    nil
  end

  def bfs(target_value)

     queue = [self]

     # queue.each do |node|

    until queue.empty?

       current_node = queue.first
       # p current_node
       # p queue
       return current_node if current_node.value == target_value
       queue.shift
    # debugger
       queue += current_node.children

    end

     nil
  end

  def inspect
    return value
  end

end

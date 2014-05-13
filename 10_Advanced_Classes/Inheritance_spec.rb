describe "Shape" do
  describe "larger_than?" do
    it "should tell if a shape is larger than another shape" do
      class A < Shape
        def area
          5
        end
      end
      class B < Shape
        def area
          10
        end
      end
      a = A.new
      b = B.new
      b.larger_than?(a).should eq(true)
      a.larger_than?(b).should eq(false)
    end
  end
  describe "color" do
    it "should be able to get and set color" do
      s = Shape.new
      s.respond_to?(:color).should eq(true)
      s.respond_to?(:color=).should eq(true)
    end
  end
end

describe "Rectangle" do
  describe "initialize" do
    it "should take width, height" do
      r = Rectangle.new(1, 2, "Blue")
      r.width.should eq(1)
      r.height.should eq(2)
      r = Rectangle.new(5, 6, "Blue")
      r.width.should eq(5)
      r.height.should eq(6)
    end
    it "should be able to set a color if given" do
      r = Rectangle.new(1, 2, "Blue")
      r.color.should eq("Blue")
      r = Rectangle.new(1, 2, "Green")
      r.color.should eq("Green")
    end
    it "should be able to set the default color to Red" do
      r = Rectangle.new(1, 2)
      r.color.should eq("Red")
    end
  end
  describe "area" do
    it "should return correct area for large rectangle" do
      r = Rectangle.new(100, 240)
      r.area.should eq(24000)
    end
    it "should return correct area for a small rectangle" do
      r = Rectangle.new(5, 2)
      r.area.should eq(10)
    end
  end
end

describe "Square" do
  describe "initialize" do
    it "should only take a side and color" do
      s = Square.new(5, "Green")
      s.width.should eq(5)
      s.height.should eq(5)
      s.color.should eq("Green")
    end
    it "should set a default color" do
      s = Square.new(13)
      s.width.should eq(13)
      s.height.should eq(13)
      s.color.should eq("Red")
    end
  end
  describe "area" do
    it "should return right area" do
      s = Square.new(15)
      s.area.should eq(225)
    end
  end
end

describe "Circle" do
  describe "initialize" do
    it "should only take radius and color" do
      c = Circle.new(7, "Brown")
      c.radius.should eq(7)
      c.color.should eq("Brown")
    end
    it "should set a default color" do
      c = Circle.new(8)
      c.radius.should eq(8)
      c.color.should eq("Red")
    end
    it "should not respond to width or height" do
      c = Circle.new(8)
      c.respond_to?(:width).should eq(false) 
      c.respond_to?(:width=).should eq(false) 
      c.respond_to?(:height).should eq(false) 
      c.respond_to?(:height=).should eq(false) 
    end
  end

  describe "area" do
    it "returns the area of a small circle" do
      c = Circle.new(3)
      c.area.should eq(28.274333882308138)
    end
    it "returns the area of a large circle" do
      c = Circle.new(23)
      c.area.should eq(1661.9025137490005)
    end
  end
end

describe "Array" do
  describe "sum_numbers" do
    it "sums consecutive numbers" do
      [1,2,3].sum_numbers.should eq(6)
    end
    it "sums random numbers" do
      [5,23,4].sum_numbers.should eq(32)
    end
  end
end

describe "String" do
  describe "camel_case" do
    it "leaves first word lowercase" do
      "test".camel_case.should eq("test")
    end
    it "should lowercase first letter if it isn't" do
      "Test".camel_case.should eq("test")
    end
    it "should combine words using camel case" do
      "This is a test".camel_case.should eq("thisIsATest")
    end
    it "should downcase words with capitals" do
      "MUST dOWNCASE words".camel_case.should eq("mustDowncaseWords")
    end
  end
end

describe "Array" do
  describe "add_index" do
    it "adds index to numbers" do
      [1, 2, 3].add_index.should eq(["0 is 1", "1 is 2", "2 is 3"])
    end
    it "adds index to strings" do
      new_array = ["0 is apple", "1 is banana", "2 is orange"]
      ["apple", "banana", "orange"].add_index.should eq(new_array)
    end
  end
end



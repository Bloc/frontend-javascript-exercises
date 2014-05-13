describe "reverse_plus_one" do
  it "creates a new array for a short array" do
    reverse_plus_one([1,2]).should eq([1,2,1])
  end
  it "creates a new array for a longer array" do
    reverse_plus_one([1,2,3,4]).should eq([1,4,3,2,1])
  end
end

describe "pluses_everywhere" do
  it "returns a single plus for a short array" do
    pluses_everywhere([1,2]).should eq("1+2")
  end
  it "returns pluses for longer arrays" do
    pluses_everywhere([1,2,3,4,5]).should eq("1+2+3+4+5")
  end
end

describe "array_quantity_plus_one" do
  it "returns the number of items for a short array plus one" do
    array_quantity_plus_one([1,2,3]).should eq(4)
  end
  it "returns the number of items for a long array plus one" do
    array_quantity_plus_one([1,532,23,35,52,39]).should eq(7)
  end
end

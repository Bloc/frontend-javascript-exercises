describe "add_item" do
  it "adds an item to the end of the list" do
    add_item("banana", ["orange"]).should eq(["orange", "banana"])
  end
  it "doesn't add an item if the list already has it" do
    add_item("orange", ["orange"]).should eq(["orange"])
  end
end

describe "remove_item" do
  it "removes an item if it's in the list" do
    remove_item("orange", ["banana", "orange"]).should eq(["banana"])
  end
  it "removes an item if it's in the list" do
    remove_item("banana", ["banana", "orange"]).should eq(["orange"])
  end
  it "doesn't remove an item if it's not in the list" do
    remove_item("apple", ["banana", "orange"]).should eq(["banana", "orange"])
  end
end

describe "full_list" do
  it "returns a list sorted" do
    list = %w{3 1 2}
    list_sorted = %w{1 2 3}
    full_list(list).should eq(list_sorted)
  end
  it "returns a different list sorted" do
    list = %w{banana orange apple}
    list_sorted = %w{apple banana orange}
    full_list(list).should eq(list_sorted)
  end
  it "returns a list sorted without duplicates" do
    list = %w{banana orange apple orange}
    list_sorted = %w{apple banana orange}
    full_list(list).should eq(list_sorted)
  end
end

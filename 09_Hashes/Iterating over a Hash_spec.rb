describe "hash_to_array" do
  it "returns array for short hash" do
    hash = { name: "Bob", age: 34 }
    array = [ "name is Bob", "age is 34" ]

    hash_to_array(hash).should eq(array)
  end
  it "returns array for longer hash" do
    hash = { name: "Joe", age: 34, sex: :male }
    array = [ "name is Joe", "age is 34", "sex is male" ]

    hash_to_array(hash).should eq(array)
  end
end


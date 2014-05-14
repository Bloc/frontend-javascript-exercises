describe "merge_us" do
  it "merges two hashes that are unique" do
    h1 = { name: "Computer", cost: "$1,000" }
    h2 = { first_name: "Bob", age: 34 }
    new_hash = { name: "Computer", cost: "$1,000", first_name: "Bob", age: 34 }

    merge_us(h1, h2).should eq(new_hash)
  end
  it "merges two hashes that are have some things in common" do
    h1 = { name: "Computer", cost: "$1,000" }
    h2 = { name: "Mouse", uuid: "1234" }
    new_hash = { name: "Mouse", cost: "$1,000", uuid: "1234" }
    
    merge_us(h1, h2).should eq(new_hash)
  end
end

describe "my_keys" do
  it "returns keys for a small hash" do
    h = { name: "Computer", cost: "$1,000" }
    keys = [:name, :cost]

    my_keys(h).should eq(keys)
  end
  it "returns keys for a larger hash" do
    h = { name: "Mouse", cost: "$5", uuid: "1234" }
    keys = [:name, :cost, :uuid]

    my_keys(h).should eq(keys)
  end
end

describe "do_i_have?" do
  it "returns false if it doesn't have any of the keys" do
    h = { name: "Computer", cost: "$1,000" }
    keys = [:age, :bio]

    do_i_have?(h, keys).should eq(false)
  end
  it "returns false if one or more of the keys isn't in the hash" do
    h = { name: "Computer", cost: "$1,000" }
    keys = [:name, :bio, :cost]

    do_i_have?(h, keys).should eq(false)
  end
  it "returns false if the hash has a different number of keys than the array" do
    h = { name: "Computer", cost: "$1,000" }
    keys = [:name]

    do_i_have?(h, keys).should eq(false)
  end  
  it "returns true if all keys are in the hash" do
    h = { name: "Computer", cost: "$1,000", uuid: "1234" }
    keys = [:name, :cost, :uuid]

    do_i_have?(h, keys).should eq(true)
  end
  it "returns true if all keys are in the hash, regardless of order" do
    h = { name: "Computer", cost: "$1,000", uuid: "1234" }
    keys = [:name, :uuid, :cost]

    do_i_have?(h, keys).should eq(true)
  end
end

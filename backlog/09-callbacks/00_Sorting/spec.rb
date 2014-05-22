describe "sort_by_length" do
  it "sorts an array of strings by length" do
    a = %w(z yyyy xxx ww)
    sorted = %w(z ww xxx yyyy)
    sort_by_length(a).should eq(sorted)
  end
  it "sorts hashes by length" do
    a = [{a: "a", b: "b"}, { key: "value"}, {}]
    sorted = [{}, { key: "value"}, {a: "a", b: "b"}]
    sort_by_length(a).should eq(sorted)
  end
end

describe "filter" do
  it "returns numbers greater than 5 in a small array" do
    filter([1, 3, 7, 8]).should eq([7, 8])
  end
  it "returns numbers greater than 5 in a large array" do
    a = [1, 2, 17, 56, 7, 12, 3, 18, 19, 23]
    r = [17, 56, 7, 12, 18, 19, 23]
    filter(a).should eq(r)
  end
end


describe "hello" do
  it "returns a full greeting for Abraham Lincoln" do
    hello("Abraham", "Lincoln").should eq("Hello Abraham Lincoln")
  end
  it "returns a full greeting for George Washington" do
    hello("George", "Washington").should eq("Hello George Washington")
  end
end




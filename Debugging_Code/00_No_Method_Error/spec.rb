describe "hello" do
  it "should return 'Hello World' when passed 'World'" do
    hello("World").should eq("Hello World")
  end
  it "should return 'Hello Bob' when passed 'Bob'" do
    hello("Bob").should eq("Hello Bob")
  end
end




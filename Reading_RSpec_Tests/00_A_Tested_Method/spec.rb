describe "link_to" do
  it "should return a valid link for Bloc" do
    link_to("Bloc", "http://www.bloc.io").should eq("<a href='http://www.bloc.io'>Bloc</a>")
  end
  it "should return a valid link for Google" do
    link_to("Google", "http://www.google.com").should eq("<a href='http://www.google.com'>Google</a>")
  end
end


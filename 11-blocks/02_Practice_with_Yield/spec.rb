describe "Array" do
  describe "new_map" do
    it "should not call map" do
      a = [1, 2, 3]
      a.stub(:map) { '' }

      a.new_map { |i| i + 1 }.should eq([2, 3, 4])
    end
    it "should map any object" do
      a = [1, "two", :three]
      a.new_map { |i| i.class }.should eq([Fixnum, String, Symbol])
    end
  end

  describe "new_map!" do
    it "should change the array" do
      a = [1, 2, 3]
      a.new_map! { |i| i + 1 }
      a.should eq([2, 3, 4])
    end
    it "should change the array for classes" do
      a = [1, "two", :three]
      a.new_map! { |i| i.class }
      a.should eq([Fixnum, String, Symbol])
    end
  end
end



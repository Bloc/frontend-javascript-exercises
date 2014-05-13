describe "lock" do
  it "should return unlocked for 3258" do
    lock(3, 2, 5, 8).should eq('unlocked')
  end
  it "should return locked for 1111" do
    lock(1, 1, 1, 1).should eq('locked')
  end
  it "should return unlocked for other valid combinations" do
    lock(3, 2, 5, 8).should eq('unlocked')
    lock(5, 2, 5, 0).should eq('unlocked')
    lock(5, 2, 6, 8).should eq('unlocked')
    lock(7, 2, 5, 8).should eq('unlocked')
    lock(7, 2, 6, 9).should eq('unlocked')
  end
end

describe "can_i_get?" do
  it "returns true if user wants a computer and has $1,000" do
    can_i_get?("computer", 1100).should eq(true)
  end
  it "returns false for a computer if they don't have $1,000" do
    can_i_get?("computer", 900).should eq(false)
  end
  it "returns true for a iPad if they have $500" do
    can_i_get?("ipad", 500).should eq(true)
  end
  it "returns false for a iPad if they have less than $500" do
    can_i_get?("ipad", 499).should eq(false)
  end
end